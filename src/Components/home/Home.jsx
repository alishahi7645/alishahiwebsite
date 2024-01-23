import React, { useState, useEffect } from "react";
import alishahi from "../../assets/images/alishahi.jpg";

function Home() {
  const [showBtn, setShowBtn] = useState(false);
  console.log(showBtn);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.pageYOffset > 400) {
        setShowBtn(!showBtn);
      } else {
        setShowBtn(false);
      }
    });
  }, []);
  return (
    <div className="w-full flex items-center justify-center dark:bg-gray-900">
      <div className="w-[80%] flex lg:flex-row flex-col justify-center items-center mx-auto">
        <div className="home-img w-full lg:w-full md:w-full sm:w-full">
          <div className="h-img w-full p-10 m-auto">
            <img
              src={alishahi}
              alt=""
              className="rounded-full m-auto ml-0 w-full"
            />
          </div>
        </div>
        <div className="home-title w-full lg:w-full md:w-full sm:w-full">
          <div className="h-title p-10 w-full h-full mt-10 flex flex-col w-full mr-0">
            <span className="text-gray-700 font-bold dark:text-gray-200">
              سلام من
            </span>
            <p className="text-gray-900 font-bold text-2xl mt-1 dark:text-gray-300">
              علی شاهی
            </p>
            <h1 className="text-red-800 font-bold text-4xl dark:text-red-600">
              طراح و برنامه نویس وب هستم
            </h1>
            <span className="text-gray-700 font-bold mt-4 dark:text-gray-300">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </span>
            <a
              href=""
              className="w-1/4 mt-4 bg-red-600 text-white text-center p-2 rounded"
            >
              کارهای من
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          showBtn
            ? "back-to-top fixed bottom-5 right-5 border p-5 rounded-full"
            : "nonebtn"
        }
      >
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-8 h-8 dark:text-gray-100"
          >
            <path
              fill-rule="evenodd"
              d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Home;
