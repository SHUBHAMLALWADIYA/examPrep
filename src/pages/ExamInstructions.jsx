import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import exams from "../data/exams";

const ExamInstructions = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const exam = exams.find((e) => e.id === examId);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  if (!exam) return <p>Exam not found</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 font-medium"
        >
          ← Back
        </button>
        <h1 className="font-bold">{exam.title}</h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto bg-white mt-6 p-6 rounded shadow">
        {step === 1 && <PaperInstructions exam={exam} />}
        {step === 2 && <GeneralInstructions exam={exam} />}
        {step === 3 && <PaletteInstructions exam={exam} />}

        {/* Footer */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 py-2 border rounded"
            >
              Back
            </button>
          )}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-6 py-2 bg-blue-600 text-white rounded"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => navigate(`/exams/${examId}/start`)}
              className="px-6 py-2 bg-green-600 text-white rounded"
            >
              I Agree & Start Test
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const PaperInstructions = ({ exam }) => (
  <>
    <h2 className="text-xl font-bold mb-4">
      Paper Specific Instructions
    </h2>

    <table className="w-full border text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">Section</th>
          <th className="border p-2">Questions</th>
          <th className="border p-2">Marks</th>
          <th className="border p-2">Duration (Min)</th>
        </tr>
      </thead>
      <tbody>
        {exam.sections.map((s) => (
          <tr key={s.id}>
            <td className="border p-2">{s.name}</td>
            <td className="border p-2">{s.questionsCount}</td>
            <td className="border p-2">{s.marks}</td>
            <td className="border p-2">{s.duration}</td>
          </tr>
        ))}
        <tr className="font-bold bg-gray-50">
          <td className="border p-2">Total</td>
          <td className="border p-2">{exam.totalQuestions}</td>
          <td className="border p-2">{exam.totalMarks}</td>
          <td className="border p-2">{exam.duration}</td>
        </tr>
      </tbody>
    </table>
  </>
);


const GeneralInstructions = ({ exam }) => (
  <>
    <h2 className="text-xl font-bold mb-4">General Instructions</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      {exam.generalInstructions.map((ins, idx) => (
        <li key={idx}>{ins}</li>
      ))}
    </ul>
  </>
);

const PaletteInstructions = ({ exam }) => {
    

    console.log(exam)
    return (
  <>
    <h2 className="text-xl font-bold mb-4">Question Palette</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {exam.paletteLegend.map((item) => (
        <div key={item.key} className="flex items-center gap-4">
          <div
            className={`w-10 h-10 rounded ${item.color} border`}
          />
          <span className="text-sm font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </>)
};


export default ExamInstructions;
