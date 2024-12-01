export default function DetailCard() {
  return (
    <div className="">
      <article className="w-full lg:h-164 bg-gradient-to-b from-blue-50 to-pink-50 shadow-xl mt-8 p-8 lg:flex rounded-3xl">
        <figure className="mb-4 lg:mb-0 w-full h-full lg:w-[60%] bg-white">
          <img
            className="w-full h-full md:h-144 lg:h-full object-cover"
            src="https://images.pexels.com/photos/2524121/pexels-photo-2524121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Album"
          />
        </figure>
        <div className="lg:flex lg:flex-col lg:justify-between lg:w-[40%] p-2 lg:p-0 lg:pl-8">
          <div>
            <div className="mt-4 lg:mt-10">
              <h2
                className={`text-zinc-700 text-2xl lg:text-3xl font-["Ssurround"]`}
              >
                회색 아기고양이
              </h2>
              <table className="table table-auto mt-2 lg:mt-8 border-spacing-y-5 border-separate">
                <tbody>
                  <tr>
                    <th className="min-w-24 p-0">
                      <div className="flex items-center h-[28px] lg:h-[30px] w-fit text-zinc-400 py-1 px-2 mr-3 bg-violet-200 rounded-full">
                        <span className="text-sm lg:text-base text-white">
                          아이템
                        </span>
                      </div>
                    </th>
                    <td className="w-full text-start text-base lg:text-lg text-zinc-600 p-0">
                      솜방망이
                    </td>
                  </tr>
                  <tr>
                    <th className="min-w-24 p-0">
                      <div className="flex items-center h-[28px] lg:h-[30px] w-fit text-zinc-400 py-1 px-2 mr-3 bg-violet-200 rounded-full">
                        <span className="text-sm lg:text-base text-white">
                          마법
                        </span>
                      </div>
                    </th>
                    <td className="w-full text-start text-base lg:text-lg text-zinc-600 p-0">
                      구룽구룽, 냥냥펀치
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 lg:size-10 fill-white stroke-red-400"
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
      </article>
    </div>
  );
}
