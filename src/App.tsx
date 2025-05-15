import HomePage from "./pages/Home/index.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFound/index.tsx";
function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
