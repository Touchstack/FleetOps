import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CarOwnersPage from "./pages/CarOwnersPage/CarOwnersPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carowners" element={<CarOwnersPage />} />
      </Routes>
    </div>
  );
}
