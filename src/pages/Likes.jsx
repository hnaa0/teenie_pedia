import LikeItems from "../components/LikeItems";

export default function Likes() {
  return (
    <div className="pb-40 lg:max-w-7xl lg:mx-auto lg:my-0">
      <div className="relative w-full h-40 md:h-52">
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
      <div className="flex justify-center">
        <LikeItems />
      </div>
    </div>
  );
}
