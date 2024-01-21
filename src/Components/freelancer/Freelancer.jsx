import React from 'react'

function Freelancer() {
  return (
    <div className="freelancer py-5 px-5 w-full bg-red-500 mb-5 dark:bg-gray-700">
        <div className="container p-5">
            <div className="freelancer-title p-5 text-center">
                <p className="text-white text-lg mb-3">آیا شما پروژه ای دارید؟</p>
                <p className="text-white text-3xl mb-5">من در دسترس هستم</p>
                <a href="#" className='border py-2 text-lg rounded px-4 text-white mt-3 transition-all hover:bg-white hover:text-black'>کارتو به من بسپار</a>
            </div>
        </div>
    </div>
  )
}

export default Freelancer