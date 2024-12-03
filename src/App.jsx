import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AppRouter from "./AppRouter";
import { useDispatch } from "react-redux";
import itemSlice from "./store/itemSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        if (!res.ok) {
          throw new Error("failed");
        }
        const data = await res.json();
        dispatch(itemSlice.actions.setData(data));
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="dark:bg-zinc-800">
      <Header />
      <div style={{ minHeight: `calc(100vh - 64px)` }}>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
