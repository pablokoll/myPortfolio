
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Experience() {
    const experienceArr = [
        {
            "title": "Full Stack Teacher Assistant",
            "institution": "at Henry Bootcamp",
            "date": "Aug. 2021 - Nov. 2021"
        },
        {
            "title": "Ecommerce Administration",
            "institution": "at Jet Cases",
            "date": "May. 2019 - Jul. 2021"
        },
        {
            "title": "Product Supervisor",
            "institution": "at Klalutex",
            "date": "Aug. 2019 - May. 2020"
        },
    ]

    const settings = {
        centerMode: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        swipeToSlide: true,
    };

    return (
        <div className="mb-4">
            <h3 className='title-font lg:text-4xl sm:text-2xl text-xl mb-4 font-semibold text-mySkillExp relative bg-mySkillLila rounded-lg px-4'>
                Experience
            </h3>
            <div className='flex gap-5 items-center w-full'>
                <Slider {...settings} className='w-full rounded-xl shadow-md  xl:invisible xl:w-0  xl:h-0 relative'>
            {experienceArr.map((education, index) => {
                return (
                    <div key={index} className="mt-2 flex flex-col margin-auto bg-white p-3 rounded-xl w-2/4 h-52 relative text-left justify-between">
                        <h2 className='text-myDarkGray font-bold xl:text-2xl sm:text-xl text-lg '>{education.title}</h2>
                        <div className='absolute bottom-2 w-full pr-10'>
                        <p className='text-myTextPresent border-b-2 mb-2 border-myGray xl:text-lg'>{education.institution}</p>
                        <p className='text-myTextPresent font-normal xl:text-lg'>{education.date}</p>
                    </div>
                    </div>
                )
            })}
            </Slider>
            <div className='flex gap-16 px-4 items-center w-full'>
            {experienceArr.map((education, index) => {
                return (
                    <div key={index} className="mt-2 flex flex-col margin-auto bg-white p-3 rounded-xl xl:w-full w-0 h-0 xl:h-64 xl:visible invisible relative shadow-lg text-left justify-between">
                        <h2 className='text-myDarkGray font-bold xl:text-2xl text-xl '>{education.title}</h2>
                        <div>
                        <p className='text-myTextPresent border-b-2 mb-2 border-myGray xl:text-lg'>{education.institution}</p>
                        <p className='text-myTextPresent font-normal xl:text-lg'>{education.date}</p>
                    </div>
                    </div>
                )
            })}
            </div>
        </div>
        </div>
    )
}

export default Experience
