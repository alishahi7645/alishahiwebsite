import React, { useState } from "react";
import "../../index.css";
import alishahi from "../../assets/images/alishahi.jpg";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [humber, setHumber] = useState(false);
  console.log(humber);
  return (
    <>
      {/* start code navbar */}
      <nav className="w-full shadow-xl px-10 py-5 flex items-center justify-between ">
        <div
          className="humber flex sm:hidden"
          onClick={() => setHumber(!humber)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="nr">
          <ul className="flex items-center justify-center hidden sm:flex">
            <li className="font-bold m-2 text-gray-600 hover:text-gray-900">
              <a href="">خانه</a>
            </li>
            <li className="font-bold m-2 text-gray-600 hover:text-gray-900">
              <a href="">درباره ما</a>
            </li>
            <li className="font-bold m-2 text-gray-600 hover:text-gray-900">
              <a href="">خدمات</a>
            </li>
            <li className="font-bold m-2 text-gray-600 hover:text-gray-900">
              <a href="">نمونه کارها</a>
            </li>
            <li className="font-bold m-2 text-gray-600 hover:text-gray-900">
              <a href="">تماس باما</a>
            </li>
          </ul>
        </div>
        <div className="nl flex">
          <div className="w-12 h-12 border rounded-full ml-4 flex items-center text-center">
            {darkMode ? (
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="m-auto text-2xl"
              >
                {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                }
              </button>
            ) : (
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="m-auto text-2xl"
              >
                {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                }
              </button>
            )}
          </div>
          <img
            src={alishahi}
            className="w-12 h-12 rounded-full object-cover"
            alt=""
          />
        </div>
      </nav>
      {humber ? (
        <div className="res transition">
          <ul className="absolute border w-52 h-62 bg-red-500">
            <li className="font-bold m-2 transition cursor-pointer text-white border-b p-2  hover:bg-gray-700">
              <a href="" className="w-full">
                خانه
              </a>
            </li>
            <li className="font-bold m-2 transition cursor-pointer text-white border-b p-2  hover:bg-gray-700">
              <a href="" className="w-full">
                درباره ما
              </a>
            </li>
            <li className="font-bold m-2 transition cursor-pointer text-white border-b p-2  hover:bg-gray-700">
              <a href="" className="w-full">
                خدمات
              </a>
            </li>
            <li className="font-bold m-2 transition cursor-pointer text-white border-b p-2  hover:bg-gray-700">
              <a href="" className="w-full">
                نمونه کارها
              </a>
            </li>
            <li className="font-bold m-2 transition cursor-pointer text-white border-b p-2  hover:bg-gray-700">
              <a href="" className="w-full">
                تماس باما
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
      {/* end code navbar */}
    </>
  );
}

export default Home;
