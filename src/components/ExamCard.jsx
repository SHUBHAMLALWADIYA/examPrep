import { useNavigate } from "react-router-dom";

const ExamCard = ({ exam }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(`/instructions/${exam.id}`);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-2">{exam.title}</h3>
        <p>Questions: {exam.questions}</p>
        <p>Duration: {exam.duration} mins</p>
      </div>

      <button
        onClick={handleStart}
        className="mt-4 bg-blue-600 text-white py-2 rounded-lg"
      >
        View Instructions
      </button>
    </div>
  );
};

export default ExamCard;
