import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AppRouter from "./AppRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
