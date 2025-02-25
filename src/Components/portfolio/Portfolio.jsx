import React from "react";
import p1 from "../../assets/images/portfolio/azhdar.png";
import p2 from "../../assets/images/portfolio/coffeeshop.png";
import p3 from "../../assets/images/portfolio/cosmetic.png";
import p4 from "../../assets/images/portfolio/jabama.png";
import p5 from "../../assets/images/portfolio/snapp.png";
import p6 from "../../assets/images/portfolio/limuchat.png";

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
              <img src={p1} alt="" srcset="" className="w-full h-[75%] object-contain"/>
              <p className="text-xl mt-3 dark:text-gray-100">وبسایت معرفی رستوران و سفارش غذا</p>
              <a href="https://github.com/alishahi7645/resturan" className="mt-3 w-full text-red-500 ">مشاهده</a>
            </div>
          </div>
          <div className="p-items mt-5 border-slate-400 p-3 h-auto md:w-2/4 lg:w-1/3 flex flex-wrap align-center justify-center">
            <div className="w-full shaodw-lg p-1 border">
              <img src={p2} alt="" srcset="" className="w-full h-[75%] object-contain" />
              <p className="text-xl mt-3 dark:text-gray-100">وبسایت معرفی کافه و منوی آنلاین</p>
              <a href="https://github.com/alishahi7645/coffeeshop" className="mt-3 w-full text-red-500 ">مشاهده</a>
            </div>
          </div>
          <div className="p-items mt-5 border-slate-400 p-3 h-auto md:w-2/4 lg:w-1/3 flex flex-wrap align-center justify-center">
            <div className="w-full shaodw-lg p-1 border">
              <img src={p3} alt="" srcset="" className="w-full h-[75%] object-contain" />
              <p className="text-xl mt-3 dark:text-gray-100">وبسایت فروشگاهی خرید لوازم آرایشی بهداشتی</p>
              <a href="https://github.com/alishahi7645/cosmetic" className="mt-3 w-full text-red-500 ">مشاهده</a>
            </div>
          </div>
          <div className="p-items mt-5 border-slate-400 p-3 h-auto md:w-2/4 lg:w-1/3 flex flex-wrap align-center justify-center">
            <div className="w-full shaodw-lg p-1 border">
              <img src={p4} alt="" srcset="" className="w-full h-[75%] object-contain" />
              <p className="text-xl mt-3 dark:text-gray-100">پروژه تمرینی وبسایت جاباما</p>
              <a href="https://github.com/alishahi7645/jabama" className="mt-3 w-full text-red-500 ">مشاهده </a>
            </div>
          </div>
          <div className="p-items mt-5 border-slate-400 p-3 h-auto md:w-2/4 lg:w-1/3 flex flex-wrap align-center justify-center">
            <div className="w-full shaodw-lg p-1 border">
              <img src={p5} alt="" srcset="" className="w-full h-[75%] object-contain"  />
              <p className="text-xl mt-3 dark:text-gray-100">پروژه تمرینی وبسایت اسنپ</p>
              <a href="https://github.com/alishahi7645/snapp-website" className="mt-3 w-full text-red-500 ">مشاهده </a>
            </div>
          </div>
          <div className="p-items mt-5 border-slate-400 p-3 h-auto md:w-2/4 lg:w-1/3 flex flex-wrap align-center justify-center">
            <div className="w-full shaodw-lg p-1 border">
              <img src={p6} alt="" srcset="" className="w-full h-[75%] object-contain" />
              <p className="text-xl mt-3 dark:text-gray-100">وبسایت معرفی ربات چت ناشناس تلگرامی</p>
              <a href="https://github.com/alishahi7645/UI-social-project" className="mt-3 w-full text-red-500 ">مشاهده </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
