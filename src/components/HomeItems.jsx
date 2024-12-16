import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import likeSlice from "../store/likeSlice";

export default function ItemGrid() {
  const dispatch = useDispatch();
  const allItems = useSelector((state) => state.itemStore.all);
  const likes = useSelector((state) => state.likeStore.items);
  const [filter, setFilter] = useState([]);

  const category = [
    { number: 1, title: "캐치! 티니핑" },
    { number: 2, title: "반짝반짝 캐치! 티니핑" },
    { number: 3, title: "알쏭달쏭 캐치! 티니핑" },
    { number: 4, title: "새콤달콤 캐치! 티니핑" },
  ];

  const filteredItems = allItems.filter(
    (item) =>
      filter.length === 0 ||
      filter.some((category) => item.period.includes(category))
  );

  const toggleFilter = (value) => {
    setFilter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleLike = (id) => {
    if (likes.includes(id)) {
      dispatch(likeSlice.actions.removeLike(id));
    } else {
      dispatch(likeSlice.actions.addLike(id));
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 w-[90%] sm:w-[80%]">
          {category.map((item) => (
            <button
              key={`${item.number}_${item.title}`}
              onClick={() => toggleFilter(item.number)}
              className={`transition 0.2s ease-in-out shadow-md py-3 md:py-4 rounded-full font-["Ssurround"] text-sm md:text-lg ${
                filter.includes(item.number) ? "bg-purple-100" : "bg-zinc-50"
              } ${
                filter.includes(item.number) ? "text-zinc-700" : "text-zinc-400"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-16 px-4 lg:px-6">
        {filteredItems.map((item) => {
          return (
            <Item
              key={item.id}
              itemData={item}
              toggleLike={toggleLike}
              likes={likes}
            />
          );
        })}
      </div>
    </>
  );
}

function Item({ itemData, toggleLike, likes }) {
  return (
    <Link to={`/detail/${itemData.id}`}>
      <div className="card card-compact shadow-lg transition ease-in-out bg-white dark:bg-zinc-100">
        <figure>
          <img src={itemData.image[0]} alt="" />
        </figure>
        <div className="card-body">
          <h2 className={`text-zinc-800 text-lg lg:text-xl font-["Ssurround"]`}>
            {itemData.name}
          </h2>
          <div className="flex justify-start mt-4">
            <div className="flex-shrink-0 h-[28px] text-zinc-400 py-1 px-2 mr-3 bg-violet-100 rounded-full">
              아이템
            </div>
            {itemData.item.length !== 0 ? (
              <div className="text-start text-zinc-600 py-1 line-clamp-1">
                {itemData.item.map((element, index) => (
                  <span key={index}>
                    {element}
                    {index != itemData.item.length - 1 && ", "}
                  </span>
                ))}
              </div>
            ) : (
              <span>없음</span>
            )}
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleLike(itemData.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-8 stroke-red-400 ${
                  likes.includes(itemData.id) ? "fill-red-400" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
