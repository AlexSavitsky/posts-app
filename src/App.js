import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CommentsPage from "./pages/CommentsPage";

import "./style.scss";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/comments/:id" element={<CommentsPage />} />
      </Routes>
    </div>
  );
}

export default App;
