import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import exams from "../data/exams";

const ExamStart = () => {
  const { examId } = useParams();
  const navigate = useNavigate();

  const exam = exams.find((e) => e.id === examId);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [marked, setMarked] = useState({});
  const [showExitModal, setShowExitModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    exam?.sections?.[0]?.duration * 60 || 0
  );

  if (!exam) return <p>Exam not found</p>;

  const currentSection = exam.sections[currentSectionIndex];
  const currentQuestion =
    currentSection.questions?.[currentQuestionIndex] || null;

  /* ⛔ Prevent Back / Refresh */
  useEffect(() => {
    const blockBack = () => window.history.pushState(null, "", window.location.href);
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", blockBack);
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      e.returnValue = "";
    });
    return () => window.removeEventListener("popstate", blockBack);
  }, []);

  /* ⏱ Timer per section */
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleNextSection();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentSectionIndex]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  /* ⏭ Navigate Questions */
  const handleAnswer = (option) => {
    const key = `${currentSection.id}-${currentQuestionIndex}`;
    setAnswers({ ...answers, [key]: option });
  };

  const handleMark = () => {
    const key = `${currentSection.id}-${currentQuestionIndex}`;
    setMarked({ ...marked, [key]: !marked[key] });
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentSection.questionsCount - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleNextSection();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  /* ⏭ Switch to next section automatically */
  const handleNextSection = () => {
    if (currentSectionIndex < exam.sections.length - 1) {
      const nextIndex = currentSectionIndex + 1;
      setCurrentSectionIndex(nextIndex);
      setCurrentQuestionIndex(0);
      setTimeLeft(exam.sections[nextIndex].duration * 60);
    } else {
      // Submit exam automatically
      navigate("/result", { state: { exam, answers } });
    }
  };

  const handleSectionClick = (index) => {
    setCurrentSectionIndex(index);
    setCurrentQuestionIndex(0);
    setTimeLeft(exam.sections[index].duration * 60);
  };

  /* 🟩 Question Palette Key */
  const getQuestionStatus = (sectionId, questionIndex) => {
    const key = `${sectionId}-${questionIndex}`;
    if (marked[key] && answers[key]) return "markedAnswered";
    if (marked[key]) return "marked";
    if (answers[key]) return "answered";
    return "notAnswered";
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* HEADER */}
      <div className="bg-white shadow px-6 py-3 flex justify-between items-center">
        <button
          onClick={() => setShowExitModal(true)}
          className="text-red-600 font-medium"
        >
          Exit Test
        </button>

        <h1 className="font-bold">{exam.title}</h1>

        <span className="font-semibold text-red-600">
          Time Left: {formatTime(timeLeft)}
        </span>
      </div>

      {/* SECTION TABS */}
      <div className="bg-gray-200 flex">
        {exam.sections.map((sec, index) => (
          <button
            key={sec.id}
            onClick={() => handleSectionClick(index)}
            className={`px-4 py-2 text-sm font-medium ${
              currentSectionIndex === index
                ? "bg-white border-b-2 border-blue-600"
                : ""
            }`}
          >
            {sec.name}
          </button>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 p-4 gap-4">
        {/* LEFT: QUESTION AREA */}
        <div className="flex-1 bg-white rounded shadow p-4 flex flex-col">
          <h2 className="font-semibold mb-2">
            {currentSection.name} - Question {currentQuestionIndex + 1} of{" "}
            {currentSection.questionsCount}
          </h2>

          {currentQuestion && (
            <>
              <p className="text-gray-800 mb-4">{currentQuestion.question}</p>
              <div className="flex flex-col gap-2 mb-4">
                {currentQuestion.options.map((opt, idx) => {
                  const key = `${currentSection.id}-${currentQuestionIndex}`;
                  const selected = answers[key] === opt;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(opt)}
                      className={`border p-2 rounded text-left ${
                        selected ? "bg-green-200" : "hover:bg-blue-100"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={handleMark}
                    className={`px-4 py-2 rounded ${
                      marked[`${currentSection.id}-${currentQuestionIndex}`]
                        ? "bg-purple-500 text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    Mark for Review
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* RIGHT: PALETTE */}
        <div className="w-64 bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-2">Question Palette</h3>
          <div className="grid grid-cols-5 gap-2">
            {currentSection.questions.map((q, idx) => {
              const status = getQuestionStatus(currentSection.id, idx);
              const colorClass = exam.paletteLegend.find((p) => p.key === status)
                ?.color;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`w-10 h-10 rounded ${colorClass} text-white`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => navigate("/result", { state: { exam, answers } })}
            className="mt-4 w-full py-2 bg-red-600 text-white rounded"
          >
            Submit Exam
          </button>
        </div>
      </div>

      {/* EXIT MODAL */}
      {showExitModal && (
        <ExitModal
          onCancel={() => setShowExitModal(false)}
          onConfirm={() => {
            localStorage.removeItem("instructionAccepted");
            navigate("/examslist");
          }}
        />
      )}
    </div>
  );
};

const ExitModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[420px] p-6 shadow-lg">
        <h2 className="text-lg font-bold mb-3 text-red-600">
          Exit Test Confirmation
        </h2>

        <p className="text-sm text-gray-700 mb-6">
          Are you sure you want to exit the test?
          <br />
          <span className="font-medium text-red-500">
            Your answers will be submitted automatically.
          </span>
        </p>

        <div className="flex justify-end gap-4">
          <button onClick={onCancel} className="px-4 py-2 border rounded">
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Exit Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamStart;
