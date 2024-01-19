import React from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="about w-full h-full flex align-center justify-center dark:bg-gray-900">
      <div className="container w-full p-10">
        <h1 className="text-3xl mx-auto text-center dark:text-gray-100">درباره من</h1>
        <div className="about-items  flex-row md:flex align-center justify-between w-full">
          <div className="about-r mt-10 w-full md:w-1/2 p-2">
            <h1 className="text-2xl font-bold dark:text-gray-100">
              این متن درباره من است و امیدوارم خوب باشد
            </h1>
            <p className="text-gray-700 mt-5 text-lg text-justify dark:text-gray-300">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <div className="about-fact w-full flex mt-5 align-center justify-between">
              <div className="w-1/3 text-center">
                <p className="text-3xl font-bold dark:text-gray-200">30</p>
                <span className="text-gray-700 dark:text-gray-200">پروژه های انجام شده</span>
              </div>
              <div className="w-1/3 text-center">
                <p className="text-3xl font-bold dark:text-gray-200">28</p>
                <span className="text-gray-700 dark:text-gray-200">مشتریان راضی</span>
              </div>
              <div className="w-1/3 text-center">
                <p className="text-3xl font-bold dark:text-gray-200">98</p>
                <span className="text-gray-700 dark:text-gray-200">عملکرد مثبت</span>
              </div>
            </div>
            <div className="cv mt-10 flex align-center">
              <a href="" className="py-2 px-5 bg-red-600 text-white rounded">
                دانلود رزومه
              </a>
              <div className="socials flex align-center">
                <div className="instagram my-auto mx-5 text-2xl text-red-500">
                  <a href="">{<FaInstagram />}</a>
                </div>
                <div className="telegram my-auto mx-5 text-2xl text-blue-400">
                  <a href="">{<FaTelegram />}</a>
                </div>
                <div className="linkedin my-auto mx-5 text-2xl text-blue-900">
                  <a href="">{<FaLinkedin />}</a>
                </div>
                <div className="linkedin my-auto mx-5 text-2xl text-gray-900">
                  <a href="">{<FaGithub />}</a>
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
