import React from 'react';
import alishahi from '../../assets/images/alishahi.jpg'

function Home() {
  return (
    <div className="w-full flex items-center justify-center dark:bg-gray-900">
        <div className="w-[80%] flex lg:flex-row flex-col justify-center items-center mx-auto">
            <div className="home-img w-full lg:w-full md:w-full sm:w-full">
                <div className="h-img w-full p-10 m-auto">
                    <img src={alishahi} alt="" className='rounded-full m-auto ml-0 w-full'/>
                </div>
            </div>
            <div className="home-title w-full lg:w-full md:w-full sm:w-full">
                <div className="h-title p-10 w-full h-full mt-10 flex flex-col w-full mr-0">
                    <span className='text-gray-700 font-bold dark:text-gray-200'>سلام من</span>
                    <p className="text-gray-900 font-bold text-2xl mt-1 dark:text-gray-300">علی شاهی</p>
                    <h1 className="text-red-800 font-bold text-4xl dark:text-red-600">طراح و برنامه نویس وب هستم</h1>
                    <span className="text-gray-700 font-bold mt-4 dark:text-gray-300">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</span>
                    <a href="" className='w-1/4 mt-4 bg-red-600 text-white text-center p-2 rounded'>کارهای من</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home