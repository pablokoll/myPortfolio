import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Education() {
    const educationArr = [
        {
            title: 'Full Stack Developer',
            institution: 'at Henry Bootcamp',
            date: 'Jul. 2021 - Nov. 2021',
        },
        {
            title: "Bachelor's Degree in Administration",
            institution: 'at Buenos Aires university',
            date: 'Aug. 2019 - Jun. 2021',
        },
        {
            title: "Bachelor's in Comunication",
            institution: 'at San Ladislao College',
            date: 'Mar. 2005 - Dic. 2018',
        },
    ];
    return (
        <div className='mb-4 relative'>
            <h3 className='title-font lg:text-4xl sm:text-2xl text-3xl mb-4 font-semibold text-mySkillEduc relative bg-mySkillBlue rounded-lg px-4'>
                Education
            </h3>
            <div className='flex gap-5 mx-2 items-center w-full md:justify-center'>
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
                    {educationArr.map((education, index) => {
                        return (
                            <div
                                key={index}
                                className='mt-2 flex flex-col margin-auto bg-white p-3 rounded-xl w-52 h-52 relative shadow-lg text-left justify-between'
                            >
                                <h2 className='text-myDarkGray font-bold md:text-2xl text-xl '>
                                    {education.title}
                                </h2>
                                <div>
                                <p className='text-myTextPresent border-b-2 mb-2 border-myGray md:text-lg '>
                                    {education.institution}
                                </p>
                                <p className='text-myTextPresent font-normal md:text-lg'>
                                    {education.date}
                                </p>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
                <div className='flex gap-16 px-4 items-center'>
                    {educationArr.map((education, index) => {
                        return (
                            <div
                                key={index}
                                className='mt-2 flex flex-col margin-auto bg-white p-3 rounded-xl md:w-64 w-0 h-0 md:h-56 md:visible invisible relative shadow-md text-left justify-between'
                            >
                                <h2 className='text-myDarkGray font-bold md:text-2xl text-xl '>
                                    {education.title}
                                </h2>
                                <div>
                                <p className='text-myTextPresent border-b-2 mb-2 border-myGray md:text-lg '>
                                    {education.institution}
                                </p>
                                <p className='text-myTextPresent font-normal md:text-lg'>
                                    {education.date}
                                </p>
                                </div>
                            </div>
                        );
                    })}
                    </div>
            </div>
        </div>
    );
}

export default Education;
