import { useState } from "react";

export default function Search() {
  const [filter, setFilter] = useState([]);

  const category = ["필터1", "필터2", "필터3", "필터4"];

  const toggleFilter = (value) => {
    setFilter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <>
      <div className="my-16 mx-5">
        <input
          className="py-5 px-7 text-md rounded-full border border-fuchsia-200 focus:border-fuchsia-300 focus:outline-0 bg-fuchsia-50 w-full md:w-124 lg:w-124"
          type="text"
        />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 w-[90%] sm:w-[80%]">
          {category.map((name) => (
            <button
              key={name}
              onClick={() => toggleFilter(name)}
              className={`transition 0.2s ease-in-out shadow-md py-4 rounded-full font-["Ssurround"] text-lg ${
                filter.includes(name) ? "bg-purple-100" : "bg-zinc-50"
              } ${filter.includes(name) ? "text-zinc-700" : "text-zinc-400"}`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
