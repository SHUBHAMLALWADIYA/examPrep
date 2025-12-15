const exams = [
  /* ================= BANKING ================= */

  {
    id: 1,
    title: "IBPS PO – Full Mock Test 1",
    category: "Banking",
    questions: 100,
    duration: 60,
    totalMarks: 100,
    negativeMarking: 0.25,
    instructions: [
      "This is a full-length IBPS PO mock test.",
      "Each question carries 1 mark.",
      "0.25 marks will be deducted for each wrong answer.",
      "No marks will be deducted for unanswered questions.",
      "Do not refresh or close the browser during the test."
    ]
  },
  {
    id: 2,
    title: "IBPS PO – Full Mock Test 2",
    category: "Banking",
    questions: 100,
    duration: 60,
    totalMarks: 100,
    negativeMarking: 0.25,
    instructions: [
      "This is a full-length IBPS PO mock test.",
      "Each question carries 1 mark.",
      "Negative marking of 0.25 applies.",
      "Calculator is not allowed.",
      "Submit the test before time expires."
    ]
  },
  {
    id: 3,
    title: "SBI Clerk – Prelims Mock 1",
    category: "Banking",
    questions: 60,
    duration: 60,
    totalMarks: 60,
    negativeMarking: 0.25,
    instructions: [
      "This test follows SBI Clerk Prelims pattern.",
      "Each question carries 1 mark.",
      "0.25 negative marking for wrong answers.",
      "Section switching is allowed.",
      "Timer will auto-submit the test."
    ]
  },
  {
    id: 4,
    title: "RRB PO – Reasoning Mock",
    category: "Banking",
    questions: 40,
    duration: 45,
    totalMarks: 40,
    negativeMarking: 0.25,
    instructions: [
      "This test contains only reasoning questions.",
      "Each question carries 1 mark.",
      "No sectional timing.",
      "Avoid refreshing the page."
    ]
  },

  /* ================= SSC ================= */

  {
    id: 5,
    title: "SSC CGL – Tier 1 Mock Test 1",
    category: "SSC",
    questions: 100,
    duration: 60,
    totalMarks: 200,
    negativeMarking: 0.5,
    instructions: [
      "This test follows SSC CGL Tier 1 pattern.",
      "Each question carries 2 marks.",
      "0.5 marks deducted for wrong answers.",
      "Questions are bilingual (Hindi & English).",
      "No break allowed during test."
    ]
  },
  {
    id: 6,
    title: "SSC CGL – Tier 1 Mock Test 2",
    category: "SSC",
    questions: 100,
    duration: 60,
    totalMarks: 200,
    negativeMarking: 0.5,
    instructions: [
      "Each question carries 2 marks.",
      "Negative marking of 0.5 applies.",
      "Timer will not pause.",
      "Review answers before final submission."
    ]
  },
  {
    id: 7,
    title: "SSC CHSL – English Mock Test",
    category: "SSC",
    questions: 25,
    duration: 20,
    totalMarks: 50,
    negativeMarking: 0.5,
    instructions: [
      "English language mock test.",
      "Each question carries 2 marks.",
      "Negative marking applies.",
      "No calculator allowed."
    ]
  },
  {
    id: 8,
    title: "SSC MTS – GK Mock Test",
    category: "SSC",
    questions: 25,
    duration: 20,
    totalMarks: 50,
    negativeMarking: 0.5,
    instructions: [
      "General Awareness mock test.",
      "Questions based on static GK & current affairs.",
      "Negative marking applies.",
      "Submit test before time ends."
    ]
  },

  /* ================= RAILWAY ================= */

  {
    id: 9,
    title: "RRB NTPC – Full Mock Test 1",
    category: "Railway",
    questions: 100,
    duration: 90,
    totalMarks: 100,
    negativeMarking: 0.33,
    instructions: [
      "This test follows RRB NTPC pattern.",
      "Each question carries 1 mark.",
      "1/3rd mark deducted for wrong answers.",
      "Do not switch tabs during test."
    ]
  },
  {
    id: 10,
    title: "RRB NTPC – Full Mock Test 2",
    category: "Railway",
    questions: 100,
    duration: 90,
    totalMarks: 100,
    negativeMarking: 0.33,
    instructions: [
      "Attempt all questions carefully.",
      "Negative marking applies.",
      "Timer will auto-submit.",
      "No re-attempt allowed."
    ]
  }
];

export default exams;
