import React from "react";

function Services() {
  return (
    <div className="services w-full h-full flex align-center justify-center dark:bg-gray-900">
      <div className="container py-5">
        <div className="service-title w-full text-center">
          <h1 className="text-3xl mx-auto text-center dark:text-gray-100">
            من چیکار میکنم
          </h1>
        </div>
        <div className="services-items mt-2 flex-row md:flex p-5 align-center justify-center ">
          <div className="s-item shadow-lg p-5 m-5 border-gray-500">
            <div className="ser-item flex-row align-center justify-center text-center p-5">
              <div className="ser-icon mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-9 h-9 text-red-600 mx-auto dark:text-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </div>
              <p className="text-3xl dark:text-gray-100 mb-4">توسعه وب</p>
              <span className="text-gray-700 dark:text-gray-100 mt-3">
                من یک توسعه دهنده وب هستم و تجربه خوبی در این کار دارم
              </span>
            </div>
          </div>
          <div className="s-item shadow-lg p-5 m-5 border-gray-500">
            <div className="ser-item flex-row align-center justify-center text-center p-5">
              <div className="ser-icon mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-9 h-9 text-red-600 mx-auto dark:text-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <p className="text-3xl dark:text-gray-100 mb-4">طراحی خلاقانه</p>
              <span className="text-gray-700 dark:text-gray-100 mt-3">
                من یک توسعه دهنده وب هستم و تجربه خوبی در این کار دارم
              </span>
            </div>
          </div>
          <div className="s-item shadow-lg p-5 m-5 border-gray-500">
            <div className="ser-item flex-row align-center justify-center text-center p-5">
              <div className="ser-icon mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-9 h-9 text-red-600 mx-auto dark:text-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </div>
              <p className="text-3xl dark:text-gray-100 mb-4">فتوشاپ</p>
              <span className="text-gray-700 dark:text-gray-100 mt-3">
                من یک توسعه دهنده وب هستم و تجربه خوبی در این کار دارم
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
