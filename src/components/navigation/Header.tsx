import Avatar from "../sub-components/avatar";
import AvatarPic from "../../assets/images/avatar.webp";
import "./Header.scss";
import { useCallback } from "react";

const Header = () => {
  //
  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      document
        .getElementById(e.currentTarget.href.split("#")[1])
        ?.scrollIntoView({ block: "start", behavior: "smooth" });
    },
    []
  );

  return (
    <header className="sticky top-0 inset-x-0 min-h-[100px] flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white dark:bg-black text-sm py-3 sm:py-0">
      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between min-w-[15rem]">
          <a
            className="flex gap-3 text-xl font-semibold dark:text-white"
            href="/"
          >
            <Avatar path={AvatarPic} desc="Rick Penabella" />
            Rick Penabella
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-3 inline-flex justify-center items-center gap-2 rounded-md font-medium text-black dark:text-white/[.5] shadow-sm align-middle hover:bg-white/[.1] dark:hover:text-white  transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <div
                id="animated-icon1"
                className="animated-icon1 navbar-collapse-toggle"
              >
                <span className="bg-black dark:bg-white"></span>
                <span className="bg-black dark:bg-white"></span>
                <span className="bg-black dark:bg-white"></span>
              </div>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col items-end gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
            <a
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-200 dark:hover:text-gray-300"
              href="#recommendations"
              onClick={scrollToSection}
            >
              Recommendations
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-200 dark:hover:text-gray-300"
              href="#highlights"
              onClick={scrollToSection}
            >
              Highlights
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-200 dark:hover:text-gray-300"
              href="#FAQ"
              onClick={scrollToSection}
            >
              FAQ
            </a>
            <a
              className="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
              data-hs-theme-click-value="dark"
              onClick={e => e.preventDefault()}
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
              </svg>
            </a>
            <a
              className="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
              data-hs-theme-click-value="light"
              onClick={e => e.preventDefault()}
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
