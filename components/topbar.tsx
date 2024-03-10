import Logo from "./logo";

export default function Topbar() {
  return (
    <>
      <div className="h-16" />
      <nav className="fixed left-0 right-0 top-0 bg-white/50 backdrop-blur border-gray-200 dark:bg-secondary-900">
        <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Logo />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-secondary-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-secondary-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-secondary-800 md:dark:bg-secondary-900 dark:border-gray-700">
              {/* <li>
                <a
                  href="/daily"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-secondary-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-secondary-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Daily
                </a>
              </li> */}
              <li>
                <a
                  href="/words"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-secondary-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-secondary-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Words.
                </a>
              </li>
              <li>
                <a
                  href="/works"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-secondary-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-secondary-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  How it Works.
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-secondary-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-secondary-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
