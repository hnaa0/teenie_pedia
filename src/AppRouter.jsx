import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Detail from "./pages/Detail";
import RandomDraw from "./pages/RandomDraw";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/random-draw" element={<RandomDraw />} />
      </Routes>
    </>
  );
}
