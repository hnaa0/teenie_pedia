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
    <nav className="navbar dark:bg-zinc-800 lg:max-w-7xl lg:mx-auto lg:my-0">
      <div className="flex-1">
        <Link to="/">
          <h1 className="btn btn-ghost text-xl">abcd</h1>
        </Link>
      </div>
      <div className="flex-none">
        <div className="flex w-12 h-12 items-center justify-center hover:cursor-pointer mr-2">
          <Link to="/likes">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 md:size-8 fill-red-400 stroke-red-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </Link>
        </div>
        <div className="flex w-12 h-12 items-center justify-center">
          <label className="swap swap-rotate items-center">
            <input className="js-theme" type="checkbox" onClick={themeChange} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 md:size-8 swap-on"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 md:size-8 swap-off stroke-white"
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
