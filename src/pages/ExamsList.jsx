import React from 'react'
import exams from '../data/exams';
import CategoryCard from '../components/CategoryCard';
const ExamsList = () => {
  
    const categories = [...new Set(exams.map(exams => exams.category))];

  const categoryCounts = categories.map(cat => ({
    title: cat,
    count: exams.filter(e => e.category === cat).length
  }));
  console.log(categoryCounts,"1")

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Exam Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryCounts.map((cat) => (
          <CategoryCard
            key={cat.title}
            title={cat.title}
            count={cat.count}
          />
        ))}
      </div>
    </div>
  );

}

export default ExamsList
