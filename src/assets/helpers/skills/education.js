import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <div className='mb-4 relative'>
            <h3 className='title-font lg:text-4xl sm:text-2xl text-xl mb-4 font-semibold text-mySkillEduc relative bg-mySkillBlue rounded-lg px-4'>
                Education
            </h3>
            <div className='flex gap-5 items-center w-full'>
                <Slider {...settings} className='w-full rounded-xl shadow-md  xl:invisible xl:w-0  xl:h-0 relative'>
                    {educationArr.map((education, index) => {
                        return (
                            <div
                                key={index}
                                className='mt-2 flex flex-col margin-auto bg-white p-3 rounded-xl w-2/4 h-52 relative text-left'
                                style={{justifyContent: 'space-between'}}
                            >
                                <h2 className='text-myDarkGray font-bold xl:text-2xl sm:text-xl text-lg '>
                                    {education.title}
                                </h2>
                                <div>
                                    <p className='text-myTextPresent border-b-2 mb-2 border-myGray xl:text-lg '>
                                        {education.institution}
                                    </p>
                                    <p className='text-myTextPresent font-normal xl:text-lg '>
                                        {education.date}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
                <div className='flex gap-16 px-4 items-center'>
                    {educationArr.map((education, index) => {
                        return (
                            <div
                                key={index}
                                className='mt-2 flex flex-col margin-auto bg-white p-3 rounded-xl xl:w-full w-0 h-0 xl:h-64 xl:visible invisible relative shadow-xl text-left justify-between'
                            >
                                <h2 className='text-myDarkGray font-bold xl:text-2xl text-xl '>
                                    {education.title}
                                </h2>
                                <div>
                                    <p className='text-myTextPresent border-b-2 mb-2 border-myGray xl:text-lg '>
                                        {education.institution}
                                    </p>
                                    <p className='text-myTextPresent font-normal xl:text-lg'>
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

{
    /* <Carousel
                    className='w-full lg:w-10/12 xl:hidden'
                    infiniteLoop
                    centerMode
                    centerSlidePercentage={90}
                    emulateTouch
                    showArrows={false}
                    swipeScrollTolerance={3}
                    showStatus={false}
                    dynamicHeight={true}
                    >
                    {educationArr.map((education, index) => {
                        return (
                            <div
                                key={index}
                                className='mt-2 flex flex-col margin-auto bg-white p-3 rounded-xl w-2/4 h-52 relative shadow-lg text-left justify-between'
                            >
                                <h2 className='text-myDarkGray font-bold xl:text-2xl text-xl '>
                                    {education.title}
                                </h2>
                                <div>
                                <p className='text-myTextPresent border-b-2 mb-2 border-myGray xl:text-lg '>
                                    {education.institution}
                                </p>
                                <p className='text-myTextPresent font-normal xl:text-lg'>
                                    {education.date}
                                </p>
                                </div>
                            </div>
                        );
                    })}
                </Carousel> */
}
