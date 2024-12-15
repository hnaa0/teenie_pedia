import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import loadingSpinner from "../assets/loading-spinner.gif";
import { Link } from "react-router-dom";
import DomToImage from "dom-to-image";
import { saveAs } from "file-saver";

export default function RandomCard() {
  const cardRef = useRef();
  const [loading, setloading] = useState(false);
  const [pickData, setPickData] = useState(null);
  const items = useSelector((state) => state.itemStore.all);

  const onRandomBtnClick = () => {
    setloading(true);
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * items.length);
      const pickItem = items[randomNum];
      setPickData(pickItem);
      setloading(false);
    }, 3500);
  };

  const filter = (node) => {
    if (node.classList) return !node.classList.contains("refresh");
    return true;
  };

  const onDownloadBtnClick = () => {
    DomToImage.toBlob(cardRef.current, { filter: filter }).then((blob) => {
      saveAs(blob, "random_draw_card.png");
    });
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={pickData ? onDownloadBtnClick : null}
        className="mr-6 ml-auto rounded-full w-fit border border-solid border-fuchsia-300 dark:border-fuchsia-100 bg-fuchsia-50 dark:bg-inherit p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 md:size-5 stroke-fuchsia-300 dark:stroke-fuchsia-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </button>
      <div className="flex justify-center mt-6 lg:mt-16 w-full">
        <div
          ref={cardRef}
          className="flex flex-col justify-between w-[90%] md:w-144 h-164 bg-gradient-to-b from-blue-50 dark:from-blue-100 to-pink-50 dark:to-pink-100 shadow-xl p-8 rounded-3xl"
        >
          {loading && (
            <div className="flex justify-center items-center h-full w-full">
              <img src={loadingSpinner} className="w-16 h-16" />
            </div>
          )}
          {!pickData && !loading && (
            <div className="w-full h-full flex items-center justify-center">
              <div>
                <span
                  className={`block font-["MangoByeolbyeol"] text-lg text-zinc-600`}
                >
                  오늘의
                </span>
                <span
                  className={`block font-["MangoByeolbyeol"] text-xl text-zinc-600`}
                >
                  <strong className="text-pink-400">티니핑</strong>은?
                </span>
              </div>
            </div>
          )}
          {pickData && !loading && (
            <div className="h-[85%]">
              <Link to={`/detail/${pickData.id}`}>
                <div className="w-full mb-4 flex justify-center h-[90%]">
                  <img
                    src="https://images.pexels.com/photos/2524121/pexels-photo-2524121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="object-cover rounded-3xl w-full md:w-[95%] h-full"
                  />
                </div>
                <h2 className="mb-10 text-base">
                  💗
                  <strong
                    className={`text-xl md:text-2xl text-zinc-700 font-["MangoByeolbyeol"] mr-1 ml-1`}
                  >
                    {pickData.name}
                  </strong>
                  💗
                </h2>
              </Link>
            </div>
          )}
          <button
            className="btn btn-ghost"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onRandomBtnClick();
            }}
          >
            {pickData == null ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 sm:size-8 stroke-rose-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 sm:size-8 stroke-rose-400 refresh"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
