import { Routes, Route } from "react-router-dom";
import HelixAI from "./pages/blog/helix-ai-intro/HelixAIIntro";
import List from "./pages/List";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/pages/blog/helix-ai-intro" element={<HelixAI />} />
    </Routes>
  );
}
