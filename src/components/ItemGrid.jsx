export default function ItemGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-16 px-4 lg:px-6">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

function Item() {
  return (
    <div className="card card-compact shadow-lg transition ease-in-out bg-white">
      <figure>
        <img
          src="https://images.pexels.com/photos/2524121/pexels-photo-2524121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className={`text-zinc-800 text-lg lg:text-xl font-["Ssurround"]`}>
          회색 아기고양이
        </h2>
        <div className="flex justify-start mt-4">
          <div className="flex-shrink-0 h-[28px] text-zinc-400 py-1 px-2 mr-3 bg-violet-100 rounded-full">
            특징
          </div>
          <div className="text-start text-zinc-600 py-1 line-clamp-2">
            가나다라마바사 아자차카타파하 abcdefg
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 fill-white stroke-red-400"
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
  );
}
