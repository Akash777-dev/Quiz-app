// src/pages/Quiz.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which language is used for web apps?",
    options: ["Python", "Java", "PHP", "All of the above"],
    answer: "All of the above",
  },
  // Add more questions here
];

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (option) => {
    const isCorrect = option === questions[currentQ].answer;
    if (isCorrect) setScore(score + 1);

    setAnswers([
      ...answers,
      { 
        question: questions[currentQ].question,
        selected: option,
        correct: questions[currentQ].answer,
        isCorrect
      }
    ]);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      // Go to Results page
      navigate("/results", { state: { score, answers, total: questions.length } });
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h2 className="text-2xl font-bold">{questions[currentQ].question}</h2>
      <div className="flex flex-col gap-3">
        {questions[currentQ].options.map((option, i) => (
          <button
            key={i}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
