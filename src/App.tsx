import { Routes, Route } from "react-router-dom";
import HelixAI from "./pages/blog/helix-ai-intro/HelixAIIntro";
import HelixAIWrite from "./pages/blog/helix-ai-write/HelixAIWrite";
import List from "./pages/List";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/pages/blog/helix-ai-intro" element={<HelixAI />} />
      <Route path="/pages/blog/helix-ai-write" element={<HelixAIWrite />} />
    </Routes>
  );
}
