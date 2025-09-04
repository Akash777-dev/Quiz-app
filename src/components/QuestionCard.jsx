import React from "react";

export default function QuestionCard({
  question,
  options,
  selected,
  onSelect,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md animate-fadeIn">
      <h2
        className="text-lg font-semibold mb-4"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <div className="grid grid-cols-1 gap-3">
        {options.map((opt, idx) => (
          <button
            key={idx}
            className={`p-3 rounded-xl border ${
              selected === opt
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-50 hover:bg-gray-100"
            } transition`}
            onClick={() => onSelect(opt)}
            dangerouslySetInnerHTML={{ __html: opt }}
          />
        ))}
      </div>
    </div>
  );
}
