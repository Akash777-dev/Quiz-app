import React from "react";

export default function Leaderboard() {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      {leaderboard.length === 0 ? (
        <p>No scores yet. Play the quiz to appear here!</p>
      ) : (
        <ul className="space-y-3">
          {leaderboard
            .sort((a, b) => b.score - a.score)
            .map((entry, idx) => (
              <li
                key={idx}
                className="p-4 bg-white rounded-xl shadow flex justify-between"
              >
                <span>
                  {entry.score}/{entry.total}
                </span>
                <span className="text-sm text-gray-500">{entry.date}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
