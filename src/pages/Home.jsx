// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl font-bold">Welcome to the Quiz App</h1>
      <div className="flex gap-4">
        <Link to="/quiz" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Start Quiz
        </Link>
        <Link to="/leaderboard" className="px-4 py-2 bg-green-600 text-white rounded-lg">
          View Leaderboard
        </Link>
      </div>
    </div>
  );
}
