import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/likes" element={<Likes />} />
      </Routes>
    </>
  );
}
