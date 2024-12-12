import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const items = useSelector((state) => state.itemStore.all);

  const onInputChange = (e) => {
    const targetValue = e.target.value;
    setSearchValue(targetValue);
    if (targetValue == "") {
      setSearchResult([]);
      return;
    }

    const result = items.filter((item) => item["name"].includes(targetValue));
    setSearchResult(result);
  };

  return (
    <>
      <div className="relative mt-14 mb-10 md:my-16 mx-5">
        <input
          className="py-4 md:py-5 px-5 md:px-7 text-sm md:text-base text-zinc-800 rounded-full border border-fuchsia-200 focus:border-fuchsia-300 focus:outline-0 bg-fuchsia-50 w-full md:w-124 lg:w-124"
          type="text"
          value={searchValue}
          onChange={onInputChange}
        />
        {searchResult.length !== 0 && (
          <div className="absolute top-16 md:top-[4.5rem] left-1/2 -translate-x-1/2 z-10 w-full md:w-124 lg:w-124 h-fit py-2 px-4 bg-fuchsia-50 border border-solid border-fuchsia-200 rounded-[2rem]">
            {searchResult.map((item, index) => (
              <div key={`searchResult_${index}`}>
                <Link to={`/detail/${item.id}`}>
                  <div className="py-3 px-5 text-sm text-zinc-700 hover:text-zinc-800">
                    {item.name}
                  </div>
                </Link>
                {index !== searchResult.length - 1 && (
                  <div className="h-[1px] w-full bg-purple-100"></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
