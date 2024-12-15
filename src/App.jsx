import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AppRouter from "./AppRouter";
import { useDispatch, useSelector } from "react-redux";
import itemSlice from "./store/itemSlice";

function App() {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.likeStore.items);

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

  const setLikes = () => {
    localStorage.setItem("LIKES", JSON.stringify(likes));
  };

  useEffect(() => {
    setLikes();
  }, [likes]);

  return (
    <div className="dark:bg-zinc-800">
      <Header />
      <div style={{ minHeight: `calc(100vh - 64px)` }}>
        <AppRouter />
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default App;
