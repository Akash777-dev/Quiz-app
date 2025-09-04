// src/pages/Results.jsx
import { useLocation, useNavigate } from "react-router-dom";

export default function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No results available.</p>;

  const { score, answers, total } = state;

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Results</h1>
      <p className="text-xl">You scored {score}/{total}</p>

      <div className="w-full max-w-lg space-y-4">
        {answers.map((ans, i) => (
          <div key={i} className={`p-4 rounded-lg ${ans.isCorrect ? "bg-green-200" : "bg-red-200"}`}>
            <p className="font-semibold">{ans.question}</p>
            <p>Your Answer: {ans.selected}</p>
            {!ans.isCorrect && <p>Correct Answer: {ans.correct}</p>}
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/quiz")}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Restart Quiz
      </button>
    </div>
  );
}
