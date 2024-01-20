import React from "react";
import p1 from "../../assets/images/portfolio/1.jpg";
import p2 from "../../assets/images/portfolio/2.jpg";
import p3 from "../../assets/images/portfolio/3.jpg";
import p4 from "../../assets/images/portfolio/4.jpg";
import p5 from "../../assets/images/portfolio/5.jpg";
import p6 from "../../assets/images/portfolio/6.jpg";

function Portfolio() {
  return (
    <div className="portfolio py-5 dark:bg-gray-900">
      <div className="container p-5 m-auto">
        <div className="port-title w-full">
          <p className="text-3xl text-center dark:text-gray-100">
            آخرین نمونه کارها
          </p>
        </div>
        <div className="port-item flex flex-wrap align-center justify-center lg:flex">
          <div className="p-items mt-5 border-slate-400 p-3 h-auto md:w-2/4 lg:w-1/3 flex flex-wrap align-center justify-center">
            <div className="w-full shaodw-lg p-1 border">
              <img src={p1} alt="" srcset="" />
              <p className="text-xl mt-3 dark:text-gray-100">نمونه</p>
              <a href="#" className="mt-3 w-full text-red-500 ">مشاهده آنلاین</a>
            </div>
          </div>
          <div className="p-items mt-5 border-slate-400 p-3 h-auto md:w-2/4 lg:w-1/3 flex flex-wrap align-center justify-center">
            <div className="w-full shaodw-lg p-1 border">
              <img src={p2} alt="" srcset="" />
              <p className="text-xl mt-3 dark:text-gray-100">نمونه</p>
              <a href="#" className="mt-3 w-full text-red-500 ">مشاهده آنلاین</a>
            </div>
          </div>
          <div className="p-items mt-5 border-slate-400 p-3 h-auto md:w-2/4 lg:w-1/3 flex flex-wrap align-center justify-center">
            <div className="w-full shaodw-lg p-1 border">
              <img src={p3} alt="" srcset="" />
              <p className="text-xl mt-3 dark:text-gray-100">نمونه</p>
              <a href="#" className="mt-3 w-full text-red-500 ">مشاهده آنلاین</a>
            </div>
          </div>
          <div className="p-items mt-5 border-slate-400 p-3 h-auto md:w-2/4 lg:w-1/3 flex flex-wrap align-center justify-center">
            <div className="w-full shaodw-lg p-1 border">
              <img src={p4} alt="" srcset="" />
              <p className="text-xl mt-3 dark:text-gray-100">نمونه</p>
              <a href="#" className="mt-3 w-full text-red-500 ">مشاهده آنلاین</a>
            </div>
          </div>
          <div className="p-items mt-5 border-slate-400 p-3 h-auto md:w-2/4 lg:w-1/3 flex flex-wrap align-center justify-center">
            <div className="w-full shaodw-lg p-1 border">
              <img src={p5} alt="" srcset="" />
              <p className="text-xl mt-3 dark:text-gray-100">نمونه</p>
              <a href="#" className="mt-3 w-full text-red-500 ">مشاهده آنلاین</a>
            </div>
          </div>
          <div className="p-items mt-5 border-slate-400 p-3 h-auto md:w-2/4 lg:w-1/3 flex flex-wrap align-center justify-center">
            <div className="w-full shaodw-lg p-1 border">
              <img src={p6} alt="" srcset="" />
              <p className="text-xl mt-3 dark:text-gray-100">نمونه</p>
              <a href="#" className="mt-3 w-full text-red-500 ">مشاهده آنلاین</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
