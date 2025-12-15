import { useNavigate } from "react-router-dom";

const CategoryCard = ({ title, count }) => {
    console.log("first",title,count)
  const navigate = useNavigate();

  const handleClick = () => {
    if (!title) {
      console.error("Category title is missing");
      return;
    }
    navigate(`/examslist/${title.toLowerCase()}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
    >
      <h3 className="text-xl font-bold mb-2">{title || "Unknown"}</h3>
      <p className="text-gray-600">{count || 0} Tests Available</p>
    </div>
  );
};

export default CategoryCard;
