import { useDispatch, useSelector } from "react-redux";
import LikeItems from "../components/LikeItems";
import likeSlice from "../store/likeSlice";

export default function Likes() {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.likeStore.items);

  const removeAllLikes = () => {
    if (window.confirm("마음함을 모두 삭제하시겠습니까?")) {
      dispatch(likeSlice.actions.resetLike());
    }
  };

  return (
    <div className="pb-40 lg:max-w-7xl lg:mx-auto lg:my-0">
      <div className="relative w-full h-32 sm:h-40 md:h-52">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-3 md:bottom-4 -rotate-6 transition ease-in-out bg-rose-200 dark:bg-rose-300 w-28 h-14 md:w-32 md:h-16 rounded-[50%]"></div>
        <h1
          className={`absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-7 text-2xl md:text-3xl font-["MangoByeolbyeol"] text-white`}
        >
          마음함
        </h1>
        <div className="absolute left-[53%] lg:left-[52%] bottom-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-6 md:size-8 stroke-yellow-300 fill-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        </div>
      </div>
      <div>
        {likes.length !== 0 ? (
          <div className="flex flex-col">
            <button
              onClick={removeAllLikes}
              className="mr-6 ml-auto rounded-full w-fit border border-solid border-fuchsia-300 dark:border-fuchsia-100 bg-fuchsia-50 dark:bg-inherit p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4 md:size-5 stroke-fuchsia-300 dark:stroke-fuchsia-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <LikeItems likesData={likes} />
          </div>
        ) : (
          <div className="flex justify-center items-center mt-20 lg:mt-32 px-4 lg:px-8 text-zinc-600 dark:text-zinc-400 ">
            마음함이 비어 있어요
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-6 ml-1 fill-yellow-200 dark:fill-yellow-300 dark:stroke-zinc-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
