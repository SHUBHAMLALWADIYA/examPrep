import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ExamLayout from "../Layouts/ExamLayout";

const ExamScreen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const exam = state?.exam;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds

  useEffect(() => {
    if (!exam) return;

    // 🔒 Prevent refresh / close
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    // 🔒 Prevent back button
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
    };

    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto-submit exam
          navigate("/result", { state: { exam, answers } });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.onpopstate = null;
      clearInterval(timer);
    };
  }, [exam]);

  if (!exam) {
    navigate("/examslist");
    return null;
  }

  const question = exam.questions[currentIndex];

  const handleAnswer = (option) => {
    const updatedAnswers = [...answers, { questionId: question.id, answer: option }];
    setAnswers(updatedAnswers);

    if (currentIndex < exam.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Navigate to result page
      navigate("/result", { state: { exam, answers: updatedAnswers } });
    }
  };

  // Format time
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <ExamLayout>
      <div className="h-full flex flex-col">
        {/* HEADER */}
        <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold">{exam.title}</h3>
          <span className="text-sm">
            Time Left: {minutes}:{seconds < 10 ? "0" : ""}{seconds}
          </span>
        </div>

        {/* BODY */}
        <div className="flex-1 p-6">
          <h4 className="font-semibold mb-4">
            Question {currentIndex + 1} of {exam.questions.length}
          </h4>
          <div className="border p-4 rounded shadow mb-4">
            <p className="mb-4">{question.question}</p>
            <div className="flex flex-col gap-2">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  className="p-2 border rounded hover:bg-blue-100 text-left"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="bg-gray-200 p-4 flex justify-end">
          <button
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            onClick={() => navigate("/result", { state: { exam, answers } })}
          >
            Submit Exam
          </button>
        </div>
      </div>
    </ExamLayout>
  );
};

export default ExamScreen;
