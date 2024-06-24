export interface Question {
  question: string;
  answers: string[];
}

const questions: Question[] = [
  {
    question: 'What is the normal body temperature for a healthy adult?',
    answers: [
      '36.1°C to 37.2°C',
      '35°C to 36°C',
      '38°C to 39°C',
      '34°C to 35°C',
    ],
  },
  {
    question: 'Which vitamin is essential for bone health?',
    answers: ['Vitamin D', 'Vitamin C', 'Vitamin B12', 'Vitamin K'],
  },
  {
    question: 'How many hours of sleep does an average adult need?',
    answers: ['7-9 hours', '5-6 hours', '10-12 hours', '4-5 hours'],
  },
  {
    question: 'What is the main benefit of regular exercise?',
    answers: [
      'Improves cardiovascular health',
      'Increases height',
      'Improves eye sight',
      'Increases hair growth',
    ],
  },
  {
    question: 'Which of the following is a symptom of dehydration?',
    answers: ['Dark urine', 'Weight gain', 'Clear skin', 'High energy'],
  },
  {
    question:
      'What is the recommended amount of daily water intake for adults?',
    answers: ['2 liters', '1 liter', '3 liters', '500 ml'],
  },
  {
    question: 'Which of the following is a common cause of tooth decay?',
    answers: ['Sugar', 'Protein', 'Fat', 'Fiber'],
  },
  {
    question: 'What type of fat is considered good for heart health?',
    answers: [
      'Unsaturated fat',
      'Saturated fat',
      'Trans fat',
      'Hydrogenated fat',
    ],
  },
  {
    question: 'Which mineral is important for red blood cell formation?',
    answers: ['Iron', 'Calcium', 'Magnesium', 'Zinc'],
  },
  {
    question: 'Which of the following is a healthy blood pressure range?',
    answers: ['120/80 mmHg', '140/90 mmHg', '160/100 mmHg', '110/70 mmHg'],
  },
  {
    question: 'What is a common symptom of the common cold?',
    answers: ['Runny nose', 'Stomach pain', 'Back pain', 'Skin rash'],
  },
  {
    question: 'Which of the following can help reduce stress?',
    answers: [
      'Meditation',
      'Skipping meals',
      'Staying indoors',
      'Ignoring problems',
    ],
  },
  {
    question: 'What is a healthy way to lose weight?',
    answers: [
      'Balanced diet and exercise',
      'Skipping meals',
      'Taking diet pills',
      'Starving',
    ],
  },
  {
    question: 'Which vitamin is known as the "sunshine vitamin"?',
    answers: ['Vitamin D', 'Vitamin A', 'Vitamin E', 'Vitamin K'],
  },
  {
    question: 'What is the best way to protect yourself from the flu?',
    answers: [
      'Getting vaccinated',
      'Taking antibiotics',
      'Drinking coffee',
      'Using essential oils',
    ],
  },
  {
    question: 'Which of the following is a healthy snack option?',
    answers: ['Fresh fruit', 'Potato chips', 'Candy', 'Ice cream'],
  },
  {
    question: 'What is a common symptom of food poisoning?',
    answers: ['Nausea', 'Hair loss', 'Dry skin', 'Increased appetite'],
  },
  {
    question: 'How often should you visit the dentist for a check-up?',
    answers: [
      'Every 6 months',
      'Once a year',
      'Every 2 years',
      'Every 5 years',
    ],
  },
  {
    question: 'Which of the following is a sign of good mental health?',
    answers: [
      'Being able to cope with stress',
      'Always feeling happy',
      'Never feeling sad',
      'Avoiding social interactions',
    ],
  },
  {
    question: 'Which nutrient is most important for muscle growth?',
    answers: ['Protein', 'Carbohydrates', 'Fat', 'Vitamins'],
  },
];

export default questions;
