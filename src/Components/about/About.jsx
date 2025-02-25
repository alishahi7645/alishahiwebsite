import React from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="about w-full h-full flex align-center justify-center dark:bg-gray-900">
      <div className="container w-full p-10">
        <h1 className="text-3xl mx-auto text-center dark:text-gray-100">
          درباره من
        </h1>
        <div className="about-items  flex-row md:flex align-center justify-between w-full">
          <div className="about-r mt-10 w-full md:w-1/2 p-2">
            <h1 className="text-2xl font-bold dark:text-gray-100">
              این متن درباره من است و امیدوارم خوب باشد
            </h1>
            <p className="text-gray-700 mt-5 text-lg text-justify dark:text-gray-300">
              سلام! من علی شاهی هستم، ۲۱ ساله از تبریز. تقریبا دو ساله که توی دنیای
              برنامه‌نویسی قدم گذاشتم و الان توی یه تیم استارتاپی نرم‌افزار به عنوان برنامه نویس فرانت اند
              مشغولم.
              <br />
               برنامه‌نویسی برای من فقط یه شغل نیست؛ یه دنیای پر از چالش 
              و خلاقیته که هر روز چیزای جدیدی برای کشف کردن داره. حل کردن مسائل،
              ساختن چیزایی که به درد بخورن و دیدن نتیجه‌ی کدهام توی دنیای واقعی،
              همون چیزیه که بهم انگیزه می‌ده. همیشه دنبال یادگیری و پیشرفت‌ام،
              چون توی این مسیر، هر خط کد یه قدم به جلوئه.
            </p>
            <div className="about-fact w-full flex mt-5 align-center justify-between">
              <div className="w-1/3 text-center">
                <p className="text-3xl font-bold dark:text-gray-200">30</p>
                <span className="text-gray-700 dark:text-gray-200">
                  پروژه های انجام شده
                </span>
              </div>
              <div className="w-1/3 text-center">
                <p className="text-3xl font-bold dark:text-gray-200">28</p>
                <span className="text-gray-700 dark:text-gray-200">
                  مشتریان راضی
                </span>
              </div>
              <div className="w-1/3 text-center">
                <p className="text-3xl font-bold dark:text-gray-200">98</p>
                <span className="text-gray-700 dark:text-gray-200">
                  عملکرد مثبت
                </span>
              </div>
            </div>
            <div className="cv mt-10 flex align-center">
              <a href="https://quera.org/qcv/pdf" className="py-2 px-5 bg-red-600 text-white rounded">
                دانلود رزومه
              </a>
              <div className="socials flex align-center">
                <div className="instagram my-auto mx-5 text-2xl text-red-500">
                  <a href="https://www.instagram.com/alishahi7645?igsh=MTloZW9kZTAxOW9jYg==">{<FaInstagram />}</a>
                </div>
                <div className="telegram my-auto mx-5 text-2xl text-blue-400">
                  <a href="https://t.me/alishahi_sh">{<FaTelegram />}</a>
                </div>
                <div className="linkedin my-auto mx-5 text-2xl text-blue-900">
                  <a href="www.linkedin.com/in/ali-shahi-3bb06a204">{<FaLinkedin />}</a>
                </div>
                <div className="linkedin my-auto mx-5 text-2xl text-gray-900">
                  <a href="https://github.com/alishahi7645">{<FaGithub />}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="about-l w-full md:w-1/2 mt-10 p-2">
            <div className="progress-title w-full mb-4">
              <h3 className="text-lg mb-1 dark:text-gray-100">Html</h3>
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div className="bg-red-500 h-2 rounded-full w-[95%]"></div>
              </div>
            </div>
            <div className="progress-title w-full mb-4">
              <h3 className="text-lg mb-1 dark:text-gray-100">Css</h3>
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div className="bg-red-500 h-2 rounded-full w-[90%]"></div>
              </div>
            </div>
            <div className="progress-title w-full mb-4">
              <h3 className="text-lg mb-1 dark:text-gray-100">Tailwind Css</h3>
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div className="bg-red-500 h-2 rounded-full w-[65%]"></div>
              </div>
            </div>
            <div className="progress-title w-full mb-4">
              <h3 className="text-lg mb-1 dark:text-gray-100">JavaScript</h3>
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div className="bg-red-500 h-2 rounded-full w-[55%]"></div>
              </div>
            </div>
            <div className="progress-title w-full mb-4">
              <h3 className="text-lg mb-1 dark:text-gray-100">React Js</h3>
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div className="bg-red-500 h-2 rounded-full w-[65%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
