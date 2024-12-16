import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  const $html = document.querySelector("html");

  const themeChange = (event) => {
    if (event.target.checked) {
      setThemeLight();
    } else {
      setThemeDark();
    }
  };

  const setThemeLight = () => {
    $html?.classList.remove("dark");
    $html.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };
  const setThemeDark = () => {
    $html?.classList.add("dark");
    $html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setThemeLight();
      document.querySelector(".js-theme")?.setAttribute("checked", "checked");
    } else {
      setThemeDark();
    }
  }, []);

  return (
    <nav className="h-14 md:h-16 min-h-14 sticky z-10 top-0 navbar bg-white/[0.85] dark:bg-zinc-800/[0.85] lg:max-w-7xl lg:mx-auto lg:my-0">
      <div className="flex-1">
        <Link to="/" aria-label="메인">
          <div className="flex relative w-32 btn btn-ghost">
            <div className="left-4 md:left-2.5 top-2.5 md:top-1 w-4 md:w-5 h-4 md:h-5 bg-pink-100 dark:bg-pink-300 rounded-md rotate-12 border-blue-100 absolute"></div>
            <h1
              className={`top-1/2 -translate-y-1/2 absolute text-lg md:text-xl text-purple-200 dark:text-purple-100 font-["SSurround"]`}
            >
              TEENIE_P
            </h1>
          </div>
        </Link>
      </div>
      <div className="flex-none">
        <Link to="/random-draw" aria-label="랜덤뽑기">
          <div className="flex w-10 md:w-12 h-10 md:h-12 items-center justify-center hover:cursor-pointer mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 md:size-8 fill-yellow-300 stroke-yellow-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
        </Link>
        <Link to="/likes" aria-label="마음함">
          <div className="flex w-10 md:w-12 h-10 md:h-12 items-center justify-center hover:cursor-pointer mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 md:size-8 fill-red-400 stroke-red-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
        </Link>
        <div
          aria-label="테마변경"
          className="flex w-10 md:w-12 h-10 md:h-12 items-center justify-center"
        >
          <label className="swap swap-rotate items-center">
            <input className="js-theme" type="checkbox" onClick={themeChange} />
            <svg
              aria-label="라이트모드"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 md:size-8 swap-on"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
            <svg
              aria-label="다크모드"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 md:size-8 swap-off stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
}
