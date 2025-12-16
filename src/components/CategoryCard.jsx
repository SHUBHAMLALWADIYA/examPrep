import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category, exams = [] }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!category) return;
    navigate(`/examslist/${category.toLowerCase()}`, {
      state: { exams },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
    >
      <h3 className="text-xl font-bold mb-2">
        {category || "Unknown Category"}
      </h3>
      <p className="text-gray-600">
        {exams.length} Mock Tests Available
      </p>
    </div>
  );
};

export default CategoryCard;
