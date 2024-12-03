import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const handleScrollUpBtn = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScrollUpBtn);

    return () => {
      window.removeEventListener("scroll", handleScrollUpBtn);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <>
        <div
          onClick={scrollToTop}
          className="fixed bottom-5 left-[50%] -translate-x-1/2 cursor-pointer w-fit rounded-full p-2.5 border border-solid border-zinc-300 bg-white dark:bg-zinc-900 bg-opacity-85 dark:bg-opacity-60"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 stroke-violet-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
            />
          </svg>
        </div>
      </>
    )
  );
}
