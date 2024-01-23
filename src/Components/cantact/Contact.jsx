import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
  const [errors, setErrors] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [randomNumber1, setRandomNumber1] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);
  const [somHolder, setSomeHolder] = useState(0);
  const [captchaValue, setCaptchaValue] = useState(0);

  const generateCaptcha = () => {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    setRandomNumber1(num1);
    setRandomNumber2(num2);

    let som = num1 + num2;

    setSomeHolder(som);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const captchaHandler = (e) => {
    setCaptchaValue(Number(e.target.value));
  };
  console.log(captchaValue);
  const validate = (e) => {
    e.preventDefault();
    if (name === "") {
      setErrors("لطفا نام خودرا وارد کنید");
      return false;
    } else if (email === "") {
      setErrors("لطفا ایمیل خودرا برای دریافت پاسخ وارد کنید");
      return false;
    } else if (subject === "") {
      setErrors("لطفا موضوع پیام را وارد کنید");
      return false;
    } else if (message === "") {
      setErrors("لطفا پیام خودرا وارد  کنید");
      return false;
    }
    setErrors("");

    if (somHolder === captchaValue) {
      emailjs
        .sendForm(
          "service_r2t2lyl",
          "template_7sxp7md",
          e.target,
          "ZDJMA55KgGvjvCS5l"
        )
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              title: "تبریک میگم!",
              text: "پیام شما با موفقیت ارسال شد",
              showCloseButton: true,
              confirmButtonText: "تایید",
              timer: 5000,
            });
          } else {
            Swal.fire({
              icon: "warning",
              title: "خطا",
              text: "پیام ارسال نشد",
              showCloseButton: true,
              confirmButtonText: "تایید",
              timer: 5000,
            });
          }
        });
    } else {
      Swal.fire({
        icon: "warning",
        title: "خطا",
        text: "کد امنیتی نامعتبر میباشد",
        showCloseButton: true,
        confirmButtonText: "تایید",
        timer: 5000,
      });
    }
  };

  return (
    <div className="contact py-5 px-5 dark:bg-gray-900">
      <div className="container p-5">
        <div className="contact-title text-center">
          <p className="text-3xl dark:text-gray-100">تماس با من</p>
        </div>
        <div className="contact-items flex-wrap justify-around align-center md:flex px-5">
          <div className="contact-text w-full md:w-1/3">
            <div className="c-item flex align-center mt-4">
              <div className="c-icon my-auto text-red-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div className="c-text flex-wrap mr-3">
                <p className="texl-lg text-bold dark:text-gray-100 text-2xl">
                  ایمیل
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  shahy8227@gmail.com
                </p>
              </div>
            </div>
            <div className="c-item flex align-center mt-4">
              <div className="c-icon my-auto text-red-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <div className="c-text flex-wrap mr-3">
                <p className="texl-lg text-bold dark:text-gray-100 text-2xl">
                  تلفن
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  +98 9232575887
                </p>
              </div>
            </div>
            <div className="c-item flex align-center mt-4">
              <div className="c-icon my-auto text-red-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <div className="c-text flex-wrap mr-3">
                <p className="texl-lg text-bold dark:text-gray-100 text-2xl">
                  آدرس
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  تبریز سمت چپ طبقه 6 واحد پهارم
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form w-full md:w-2/3 mt-4 flex align-center justify-end">
            <div className="contact-form mt-4 w-[80%] ml-0">
              <span className="text-red-700 text-lg">{errors}</span>
              <form action="" onSubmit={validate}>
                <div className="form-item flex-wrap justify-between md:flex">
                  <div className="w-full md:w-[300px] mb-2">
                    <input
                      type="text"
                      className="input form-control shadow bg-gray-100 py-1.5 px-3 w-full text-md border-0 outline-none dark:bg-gray-400 rounded dark:placeholder:text-white"
                      placeholder="نام ونام خانوادگی شما"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      name="name"
                    />
                  </div>
                  <div className="w-full md:w-[300px] mb-2">
                    <input
                      type="email"
                      className="input form-control shadow bg-gray-100 py-1.5 px-3 w-full text-md border-0 outline-none dark:bg-gray-400 rounded dark:placeholder:text-white"
                      placeholder="ایمیل شما"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      name="email"
                    />
                  </div>
                </div>
                <div className="form-item">
                  <div className="mb-2">
                    <input
                      type="text"
                      className="input form-control shadow mt-5 bg-gray-100 py-1.5 px-3 w-full text-md border-0 outline-none dark:bg-gray-400 rounded dark:placeholder:text-white"
                      placeholder="موضوع"
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      name="subject"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="input form-control shadow mt-5 bg-gray-100 py-1.5 px-3 w-full text-md border-0 outline-none dark:bg-gray-400 rounded dark:placeholder:text-white"
                      placeholder="پیام شما"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      name="message"
                    />
                  </div>
                </div>
                <div className="captcha flex flex-row-reverse align-center justify-end">
                  <p className="text-xs my-auto">
                    برای ارسال پیام حاصل جمع دو عدد را در کادر مشخص شده وارد
                    کنید
                  </p>
                  <div className="newcaptcha my-auto mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 cursor-pointer"
                      onClick={generateCaptcha}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  <span className="mx-2 text-2xl">{randomNumber1}</span>
                  <span className="mx-2 text-2xl">+</span>
                  <span className="mx-2 text-2xl">{randomNumber2}</span>
                  <span className="mx-2 text-2xl">=</span>
                  <input
                    type="text"
                    placeholder="حاصل جمع را وارد کنید"
                    className="border "
                    onChange={captchaHandler}
                  />
                </div>
                <div className="form-item">
                  <button className="mt-5 bg-red-500 text-white py-1 px-3 rounded">
                    ارسال پیام
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
