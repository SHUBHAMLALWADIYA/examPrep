import exams from "../data/exams";
import CategoryCard from "../components/CategoryCard";

const ExamsList = () => {
  const grouped = exams.reduce((acc, exam) => {
    if (!exam.category) return acc;

    if (!acc[exam.category]) {
      acc[exam.category] = [];
    }

    acc[exam.category].push(exam);
    return acc;
  }, {});

  console.log("Grouped Exams:", grouped); // 👈 DEBUG

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Exam Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(grouped).map(([category, categoryExams]) => (
          <CategoryCard
            key={category}
            category={category}
            exams={categoryExams} // ✅ MUST be here
          />
        ))}
      </div>
    </div>
  );
};

export default ExamsList;
