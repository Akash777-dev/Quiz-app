import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Leaderboard from "./pages/Leaderboard";
import Results from "./pages/Results";   // ⬅ add this

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/results" element={<Results />} />   {/* ⬅ new route */}
    </Routes>
  );
}

export default App;
