import { NavigationItem } from "../utils/interfaces/data.interface";

export function Header({ items }: any) {
  const contents = items.data.map((item: NavigationItem, i: number) => {
    return (
      <li key={item.id}>
        <a
          href={item.link}
          className="block py-2 pl-3 pr-4 text-white bg-blue-700 
            rounded md:bg-transparent md:text-blue-700 md:p-0"
          aria-current="page"
        >
          {item.title}
        </a>
      </li>
    );
  });
  const searchForm = document.getElementById("navbar-search") as HTMLDivElement;
  const toggleBtn = () => searchForm.classList.toggle("hidden");
  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/home" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            myApp
          </span>
        </a>
        <div className="flex md:order-2">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm
               border rounded-lg
               focus:ring-blue-500
               bg-gray-700 border-gray-600 
               placeholder-gray-400 text-white 
               focus:ring-blue-500 ocus:border-blue-500"
              placeholder="Search..."
            ></input>
          </div>
          <button
            id="toggle-search"
            type="button"
            onClick={toggleBtn}
            className="inline-flex items-center p-2 text-sm
            rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2
             focus:ring-gray-600 text-gray-400"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm 
              border border-gray-600 rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 
              bg-gray-700 placeholder-gray-400 
              text-white"
              placeholder="Search..."
            ></input>
          </div>
          <ul
            className="flex flex-col p-4 mt-4 border
           border-gray-700 rounded-lg md:flex-row 
           md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 
           md:bg-white bg-gray-800 md:bg-gray-900"
          >
            {contents}
          </ul>
        </div>
      </div>
    </nav>
  );
}
