import { useNavigate } from "react-router-dom";

const ExamCard = ({ exam }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(`/exams/${exam.id}/instructions`, {
      state: { exam },
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold mb-2">{exam.title}</h3>

      <div className="text-sm text-gray-600 space-y-1">
        <p>Questions: {exam.questions}</p>
        <p>Duration: {exam.duration} mins</p>
        <p>Total Marks: {exam.totalMarks}</p>
        <p>Negative Marking: {exam.negativeMarking}</p>
      </div>

      <button
        onClick={handleStart}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Start Examination
      </button>
    </div>
  );
};

export default ExamCard;
