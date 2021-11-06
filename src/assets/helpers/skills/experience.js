
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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

    return (
        <div className="mb-4">
            <h3 className='title-font lg:text-4xl sm:text-2xl text-3xl mb-4 font-semibold text-mySkillExp relative bg-mySkillLila rounded-lg px-4'>
                Experience
            </h3>
            <div className='flex gap-5 mx-2 items-center w-full '>
            <Carousel
                    className='w-full md:hidden'
                    infiniteLoop
                    centerMode
                    centerSlidePercentage={90}
                    emulateTouch
                    showArrows={false}
                    swipeScrollTolerance={3}
                    showStatus={false}

                    >
            {experienceArr.map((education, index) => {
                return (
                    <div key={index} className="mt-2 flex flex-col margin-auto bg-white p-3 rounded-xl w-52 h-52 relative shadow-md text-left justify-between">
                        <h2 className='text-myDarkGray font-bold md:text-2xl text-xl '>{education.title}</h2>
                        <div>
                        <p className='text-myTextPresent border-b-2 mb-2 border-myGray md:text-lg'>{education.institution}</p>
                        <p className='text-myTextPresent font-normal md:text-lg'>{education.date}</p>
                    </div>
                    </div>
                )
            })}
            </Carousel>
            <div className='flex gap-16 px-4 items-center w-full'>
            {experienceArr.map((education, index) => {
                return (
                    <div key={index} className="mt-2 flex flex-col margin-auto bg-white p-3 rounded-xl md:w-full w-0 h-0 md:h-64 md:visible invisible relative shadow-lg text-left justify-between">
                        <h2 className='text-myDarkGray font-bold md:text-2xl text-xl '>{education.title}</h2>
                        <div>
                        <p className='text-myTextPresent border-b-2 mb-2 border-myGray md:text-lg'>{education.institution}</p>
                        <p className='text-myTextPresent font-normal md:text-lg'>{education.date}</p>
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
