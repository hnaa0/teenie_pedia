export default function LikeItems() {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-8 lg:mt-16 px-4 lg:px-8">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
}

function Item() {
  return (
    <div className="card card-compact shadow-lg transition ease-in-out bg-pink-50">
      <div className="card-actions relative items-center justify-between my-1">
        <h2
          className={`absolute left-1/2 -translate-x-1/2 text-zinc-800 text-lg lg:text-xl font-["Ssurround"]`}
        >
          abcde
        </h2>
        <button className="ml-auto btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 fill-red-400 stroke-red-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
      <figure>
        <img
          src="https://images.pexels.com/photos/2524121/pexels-photo-2524121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </figure>
    </div>
  );
}
