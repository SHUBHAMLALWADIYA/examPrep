import { useParams } from "react-router-dom";
import exams from "../data/exams";
import ExamCard from "../components/ExamCard";

const CategoryExams = () => {
  const { category } = useParams();

  const filteredExams = exams.filter(
    exam => exam.category.toLowerCase() === category
  );

  if (filteredExams.length === 0) {
    return <p>No tests available for this category.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {category} Mock Tests
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExams.map((exam) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    </div>
  );
};

export default CategoryExams;
