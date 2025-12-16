const exams = [
  /* ======================================================
     IBPS – RRB PO PRELIMS
  ====================================================== */
 
  {
    id: "ibps_rrb_po_prelims",
    examGroup: "IBPS",
    title: "IBPS RRB PO Prelims",
    category: "Banking",
    level: "Prelims",

    totalQuestions: 80,
    totalMarks: 80,
    duration: 45,
    negativeMarking: 0.25,
    medium: ["English", "Hindi"],

    sections: [
      {
        id: "reasoning",
        name: "Reasoning",
        questionsCount: 40,
        marks: 40,
        duration: 25,
        questions: [
          { id: 1, question: "Find the odd one out: 2, 3, 6, 7, 8", options: ["2", "3", "6", "7", "8"], answer: "6" },
          { id: 2, question: "If 'CAT' is coded as 'DBU', how is 'DOG' coded?", options: ["EPH", "EPG", "DQH", "DQG"], answer: "EPH" },
          { id: 3, question: "Find the next number in the series: 1, 4, 9, 16, ?", options: ["25", "36", "20", "30"], answer: "25" },
          { id: 4, question: "Series: 5, 10, 20, 40, ?", options: ["60", "70", "80", "90"], answer: "80" },
          { id: 5, question: "If all roses are flowers and some flowers are white, are some roses definitely white?", options: ["Yes", "No", "Cannot say", "None"], answer: "Cannot say" },
          { id: 6, question: "Find the missing term: 2, 5, 10, 17, ?", options: ["24", "26", "30", "28"], answer: "26" },
          { id: 7, question: "Direction Q: Point A is 5 km north of B. B is 3 km east of C. Find distance between A and C.", options: ["6 km", "7 km", "8 km", "9 km"], answer: "6 km" },
          { id: 8, question: "Find the odd word: Lion, Tiger, Dog, Leopard", options: ["Lion", "Tiger", "Dog", "Leopard"], answer: "Dog" },
          { id: 9, question: "Alphabet series: A, D, I, P, ?", options: ["Y", "Z", "X", "V"], answer: "Y" },
          { id: 10, question: "Blood relation: Pointing to a man, she says 'He is the son of my mother’s brother.' Who is he?", options: ["Nephew", "Cousin", "Brother", "Son"], answer: "Cousin" },
          { id: 11, question: "Find the missing number: 3, 6, 12, 24, ?", options: ["36", "48", "50", "60"], answer: "48" },
          { id: 12, question: "Select the related pair: Finger : Hand :: Leaf : ?", options: ["Branch", "Tree", "Stem", "Petal"], answer: "Tree" },
          { id: 13, question: "If 'PENCIL' is coded as 'QFODJM', find code for 'PAPER'", options: ["QBQFS", "QBQER", "QBRFS", "QAPER"], answer: "QBQFS" },
          { id: 14, question: "Direction: Point X is east of Y. Y is south of Z. Find X from Z.", options: ["Northeast", "Southeast", "Southwest", "Northwest"], answer: "Southeast" },
          { id: 15, question: "Find the odd number: 121, 144, 169, 182", options: ["121", "144", "169", "182"], answer: "182" },
          { id: 16, question: "If 'apple' is coded as 'elppa', how is 'orange' coded?", options: ["egnaro", "egnrao", "egnarO", "eorgna"], answer: "egnaro" },
          { id: 17, question: "Find the missing term: 2, 6, 12, 20, ?", options: ["28", "30", "32", "36"], answer: "30" },
          { id: 18, question: "Select the related number: 8 : 64 :: 9 : ?", options: ["81", "72", "91", "99"], answer: "81" },
          { id: 19, question: "If 'A' is brother of 'B' and 'C' is father of 'A', how is B related to C?", options: ["Son", "Daughter", "Child", "Cannot say"], answer: "Child" },
          { id: 20, question: "Find the next term: 7, 14, 28, 56, ?", options: ["110", "112", "120", "115"], answer: "112" },
          { id: 21, question: "Arrange in ascending order: 0.3, 0.25, 0.33, 0.29", options: ["0.25, 0.29, 0.3, 0.33", "0.3, 0.29, 0.25, 0.33", "0.25, 0.3, 0.29, 0.33", "0.29, 0.25, 0.3, 0.33"], answer: "0.25, 0.29, 0.3, 0.33" },
          { id: 22, question: "Direction: Point A walks 4 km north, then 3 km east. Distance from start?", options: ["5 km", "6 km", "7 km", "8 km"], answer: "5 km" },
          { id: 23, question: "Odd one out: Square, Triangle, Circle, Rectangle", options: ["Square", "Triangle", "Circle", "Rectangle"], answer: "Circle" },
          { id: 24, question: "If 'PEN' is coded as 'QFO', 'PAPER' is?", options: ["QBQFS", "QAPER", "QBQFR", "QAQFS"], answer: "QBQFS" },
          { id: 25, question: "Find missing number: 5, 11, 23, 47, ?", options: ["94", "95", "96", "97"], answer: "95" },
          { id: 26, question: "Find next in series: 1, 2, 6, 24, ?", options: ["96", "120", "48", "60"], answer: "120" },
          { id: 27, question: "If all pens are pencils and some pencils are erasers, are some pens definitely erasers?", options: ["Yes", "No", "Cannot say", "None"], answer: "Cannot say" },
          { id: 28, question: "Find odd number: 2, 5, 7, 12, 13", options: ["2", "5", "7", "12", "13"], answer: "12" },
          { id: 29, question: "Find the missing letter: A, C, F, J, ?", options: ["O", "P", "M", "N"], answer: "O" },
          { id: 30, question: "Direction: X is west of Y. Y is north of Z. Direction of Z from X?", options: ["South", "Southeast", "Southwest", "North"], answer: "Southwest" },
          { id: 31, question: "Find the next number: 3, 9, 27, ?", options: ["54", "81", "72", "63"], answer: "81" },
          { id: 32, question: "Alphabet series: B, E, H, K, ?", options: ["M", "N", "L", "O"], answer: "N" },
          { id: 33, question: "Find the odd word: Apple, Banana, Carrot, Mango", options: ["Apple", "Banana", "Carrot", "Mango"], answer: "Carrot" },
          { id: 34, question: "Blood relation: A is father of B. B is sister of C. How is A related to C?", options: ["Father", "Mother", "Uncle", "Cannot say"], answer: "Father" },
          { id: 35, question: "Find missing number: 2, 6, 12, 20, 30, ?", options: ["40", "42", "50", "48"], answer: "42" },
          { id: 36, question: "Select related pair: Finger : Hand :: Leaf : ?", options: ["Branch", "Tree", "Stem", "Petal"], answer: "Tree" },
          { id: 37, question: "Find next term: 1, 1, 2, 6, 24, ?", options: ["120", "48", "30", "60"], answer: "120" },
          { id: 38, question: "Odd one out: Dog, Cat, Cow, Car", options: ["Dog", "Cat", "Cow", "Car"], answer: "Car" },
          { id: 39, question: "Letter series: D, F, I, M, ?", options: ["R", "S", "Q", "P"], answer: "R" },
          { id: 40, question: "If 'MANGO' is coded as 'NBOHP', how is 'APPLE' coded?", options: ["BQQMF", "BQQNG", "AQPMF", "AQPMF"], answer: "BQQMF" },
        ],
      },

      {
        id: "quant",
        name: "Quantitative Aptitude",
        questionsCount: 40,
        marks: 40,
        duration: 20,
        questions: [
          { id: 101, question: "If a train covers 240 km in 4 hours, what is its average speed?", options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"], answer: "60 km/h" },
          { id: 102, question: "A shopkeeper sells an article at 20% profit. If cost price is ₹200, find selling price.", options: ["₹220", "₹240", "₹250", "₹260"], answer: "₹240" },
          { id: 103, question: "What is the LCM of 12 and 18?", options: ["36", "72", "54", "60"], answer: "36" },
          { id: 104, question: "Sum of ages of A and B is 50. A is 10 years older. Find their ages.", options: ["A=30,B=20", "A=35,B=15", "A=25,B=25", "A=28,B=22"], answer: "A=30,B=20" },
          { id: 105, question: "Bag contains 5 red,6 blue,4 green balls. Probability of blue?", options: ["1/3", "1/5", "2/5", "1/2"], answer: "2/5" },
          { id: 106, question: "A sum of ₹5000 is lent at 10% per annum simple interest. Interest after 2 years?", options: ["₹1000", "₹1200", "₹1500", "₹2000"], answer: "₹1000" },
          { id: 107, question: "Solve: 25% of 400 + 50% of 200", options: ["150", "200", "175", "250"], answer: "200" },
          { id: 108, question: "Find next number: 2, 6, 12, 20, ?", options: ["30", "28", "32", "36"], answer: "30" },
          { id: 109, question: "If 5x + 3 = 18, find x.", options: ["2", "3", "4", "5"], answer: "3" },
          { id: 110, question: "Compound interest on ₹1000 at 10% p.a for 2 years?", options: ["₹210", "₹220", "₹100", "₹200"], answer: "₹210" },
          { id: 111, question: "5 pens and 3 pencils cost ₹40. Cost of 1 pen if pencil=₹2?", options: ["₹6", "₹5", "₹8", "₹7"], answer: "₹6" },
          { id: 112, question: "Area of square with side 12 cm?", options: ["144 cm²", "124 cm²", "120 cm²", "150 cm²"], answer: "144 cm²" },
          { id: 113, question: "Simplify: 15 × 12 ÷ 3 + 8", options: ["68", "60", "50", "58"], answer: "68" },
          { id: 114, question: "If x/3 = 12, find x.", options: ["36", "30", "32", "33"], answer: "36" },
          { id: 115, question: "Find average of 5, 10, 15, 20, 25", options: ["15", "20", "18", "16"], answer: "15" },
          { id: 116, question: "Simple interest on ₹800 for 2 years at 5%?", options: ["₹80", "₹75", "₹70", "₹100"], answer: "₹80" },
          { id: 117, question: "A train 150 m long passes a man in 15 sec. Speed?", options: ["10 m/s", "12 m/s", "15 m/s", "20 m/s"], answer: "10 m/s" },
          { id: 118, question: "Number series: 3, 6, 12, 24, ?", options: ["48", "50", "60", "54"], answer: "48" },
          { id: 119, question: "Find next number: 7, 14, 28, 56, ?", options: ["110", "112", "120", "115"], answer: "112" },
          { id: 120, question: "If ratio of 2 numbers is 3:4, sum=28. Numbers?", options: ["12,16", "14,14", "10,18", "15,13"], answer: "12,16" },
          { id: 121, question: "Speed of a car = 72 km/h. Distance in 2 hours?", options: ["144 km", "150 km", "160 km", "140 km"], answer: "144 km" },
          { id: 122, question: "Solve: 5² + 6² - 7²", options: ["0", "5", "12", "10"], answer: "0" },
          { id: 123, question: "Simplify: 50 - 25 ÷ 5", options: ["45", "40", "55", "48"], answer: "45" },
          { id: 124, question: "If 20% of x = 40, find x.", options: ["150", "160", "200", "180"], answer: "200" },
          { id: 125, question: "Find HCF of 12 and 18", options: ["6", "12", "18", "9"], answer: "6" },
          { id: 126, question: "Find LCM of 12 and 18", options: ["36", "72", "54", "60"], answer: "36" },
          { id: 127, question: "A sum ₹6000 lent at 5% SI for 3 years?", options: ["₹900", "₹800", "₹1000", "₹950"], answer: "₹900" },
          { id: 128, question: "Find missing number: 2, 5, 10, 17, ?", options: ["24", "26", "30", "28"], answer: "26" },
          { id: 129, question: "5 men complete a work in 10 days. 10 men complete in?", options: ["5 days", "6 days", "8 days", "4 days"], answer: "5 days" },
          { id: 130, question: "If a:b=3:4 and b:c=2:3, find a:c", options: ["1:2", "3:8", "1:1", "2:3"], answer: "3:8" },
          { id: 131, question: "Simple interest on ₹500 for 2 years at 10%?", options: ["₹100", "₹110", "₹90", "₹95"], answer: "₹100" },
          { id: 132, question: "Distance between points A and B is 10 km. If speed=5 km/h, time?", options: ["2 h", "3 h", "4 h", "5 h"], answer: "2 h" },
          { id: 133, question: "Solve: 15 × (12 ÷ 3) + 8", options: ["68", "60", "50", "58"], answer: "68" },
          { id: 134, question: "If x + y = 20, y = 8, find x", options: ["12", "10", "14", "15"], answer: "12" },
          { id: 135, question: "Area of rectangle 5 × 8?", options: ["40", "35", "45", "50"], answer: "40" },
          { id: 136, question: "Perimeter of square side 6?", options: ["24", "30", "20", "18"], answer: "24" },
          { id: 137, question: "Speed = Distance/Time. Distance=60 km, time=2 hr. Speed?", options: ["30 km/h", "25 km/h", "40 km/h", "35 km/h"], answer: "30 km/h" },
          { id: 138, question: "Find next number: 1, 4, 9, 16, ?", options: ["25", "36", "30", "40"], answer: "25" },
          { id: 139, question: "Solve: 60 ÷ 5 + 6 × 2", options: ["24", "22", "20", "26"], answer: "24" },
          { id: 140, question: "If 3x = 12, find x", options: ["4", "3", "5", "6"], answer: "4" },
        ],
      },
    ],

    generalInstructions: [
      "The examination is conducted online.",
      "Each section has a fixed time limit.",
      "Negative marking of 1/4 mark applies.",
      "Do not refresh or close the browser.",
    ],

    paletteLegend: [
      { key: "notVisited", label: "Not Visited", color: "bg-gray-300" },
      { key: "notAnswered", label: "Not Answered", color: "bg-red-500" },
      { key: "answered", label: "Answered", color: "bg-green-500" },
      { key: "marked", label: "Marked for Review", color: "bg-purple-500" },
      { key: "markedAnswered", label: "Marked & Answered", color: "bg-orange-500" },
    ],
  },



  /* ======================================================
     SBI – PO PRELIMS
  ====================================================== */
  {
    id: "sbi_po_prelims",
    examGroup: "SBI",
    title: "SBI PO Prelims",
    category: "Banking",
    level: "Prelims",

    totalQuestions: 100,
    totalMarks: 100,
    duration: 60,
    negativeMarking: 0.25,
    medium: ["English", "Hindi"],

    sections: [
      {
        id: "english",
        name: "English Language",
        questionsCount: 30,
        marks: 30,
        duration: 20,
      },
      {
        id: "reasoning",
        name: "Reasoning Ability",
        questionsCount: 35,
        marks: 35,
        duration: 20,
      },
      {
        id: "quant",
        name: "Quantitative Aptitude",
        questionsCount: 35,
        marks: 35,
        duration: 20,
      },
    ],

    generalInstructions: [
      "Each question carries 1 mark.",
      "Negative marking of 0.25 mark applies.",
      "Each section is timed separately.",
    ],

   paletteLegend: [
  { key: "notVisited", label: "Not Visited", color: "bg-gray-300" },
  { key: "notAnswered", label: "Not Answered", color: "bg-red-500" },
  { key: "answered", label: "Answered", color: "bg-green-500" },
  { key: "marked", label: "Marked for Review", color: "bg-purple-500" },
  { key: "markedAnswered", label: "Marked & Answered", color: "bg-orange-500" },
]
,
  },

  /* ======================================================
     SSC – CGL TIER 1
  ====================================================== */
  {
    id: "ssc_cgl_tier_1",
    examGroup: "SSC",
    title: "SSC CGL Tier 1",
    category: "SSC",
    level: "Tier 1",

    totalQuestions: 100,
    totalMarks: 200,
    duration: 60,
    negativeMarking: 0.5,
    medium: ["English", "Hindi"],

    sections: [
      {
        id: "gi",
        name: "General Intelligence & Reasoning",
        questionsCount: 25,
        marks: 50,
        duration: 15,
      },
      {
        id: "ga",
        name: "General Awareness",
        questionsCount: 25,
        marks: 50,
        duration: 15,
      },
      {
        id: "quant",
        name: "Quantitative Aptitude",
        questionsCount: 25,
        marks: 50,
        duration: 15,
      },
      {
        id: "english",
        name: "English Comprehension",
        questionsCount: 25,
        marks: 50,
        duration: 15,
      },
    ],

    generalInstructions: [
      "Each question carries 2 marks.",
      "Negative marking of 0.5 marks.",
      "Questions are bilingual except English section.",
    ],

    paletteLegend: [
  { key: "notVisited", label: "Not Visited", color: "bg-gray-300" },
  { key: "notAnswered", label: "Not Answered", color: "bg-red-500" },
  { key: "answered", label: "Answered", color: "bg-green-500" },
  { key: "marked", label: "Marked for Review", color: "bg-purple-500" },
  { key: "markedAnswered", label: "Marked & Answered", color: "bg-orange-500" },
]
  },

  /* ======================================================
     RAILWAY – RRB NTPC CBT 1
  ====================================================== */
  {
    id: "rrb_ntpc_cbt_1",
    examGroup: "Railway",
    title: "RRB NTPC CBT 1",
    category: "Railway",
    level: "CBT 1",

    totalQuestions: 100,
    totalMarks: 100,
    duration: 90,
    negativeMarking: 0.33,
    medium: ["English", "Hindi"],

    sections: [
      {
        id: "maths",
        name: "Mathematics",
        questionsCount: 30,
        marks: 30,
        duration: 30,
      },
      {
        id: "reasoning",
        name: "General Intelligence & Reasoning",
        questionsCount: 30,
        marks: 30,
        duration: 30,
      },
      {
        id: "ga",
        name: "General Awareness",
        questionsCount: 40,
        marks: 40,
        duration: 30,
      },
    ],

    generalInstructions: [
      "Negative marking of 1/3rd mark applies.",
      "Each question carries 1 mark.",
      "Exam duration is 90 minutes.",
    ],

    paletteLegend: [
  { key: "notVisited", label: "Not Visited", color: "bg-gray-300" },
  { key: "notAnswered", label: "Not Answered", color: "bg-red-500" },
  { key: "answered", label: "Answered", color: "bg-green-500" },
  { key: "marked", label: "Marked for Review", color: "bg-purple-500" },
  { key: "markedAnswered", label: "Marked & Answered", color: "bg-orange-500" },
]
  },
];

export default exams;
