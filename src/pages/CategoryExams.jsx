import { useParams, useLocation, Navigate } from "react-router-dom";
import allExams from "../data/exams";
import ExamCard from "../components/ExamCard";

const CategoryExams = () => {
  const { category } = useParams();
  const location = useLocation();

  if (!category) return <Navigate to="/examslist" />;

  const exams =
    location.state?.exams ||
    allExams.filter(
      exam => exam.category.toLowerCase() === category.toLowerCase()
    );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {category} Mock Tests
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exams.map(exam => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    </div>
  );
};

export default CategoryExams;
