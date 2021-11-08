import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skill() {
    const skillArr = [
        {
            title: 'FRONT END',
            skills: ['HTML', 'CSS', 'Tailwind CSS', 'React (Hooks)', 'React Native', 'Redux'],
        },
        {
            title: 'BACK END',
            skills: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'PostgreSQL', 'MongoDB'],
        },
        {
            title: 'LANGUAGES',
            skills: ['Javascript', 'Typescript'],
        },
    ];
    const tools = {
        title: 'AND THE FOLLOWING TOOLS',
        skills: ['Git', 'GitHub', 'Scrum', 'and Firebase'],
    };

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
        <div className='mb-4'>
            <h3 className='title-font lg:text-4xl sm:text-2xl text-xl mb-4 font-semibold text-mySkillSkill relative bg-mySkillOrange rounded-lg px-4'>
                Skills
            </h3>
            <div className='flex gap-5 items-center w-full'>
                <Slider {...settings} className='w-full items-center justify-center xl:invisible xl:w-0 xl:h-0 relative mb-10'>
                    {skillArr.map((education, index) => {
                        return (
                            <div className='flex flex-col items-center justify-center'>
                                <h2 className='text-mySkillSubSkill font-bold xl:text-2xl sm:text-xl text-md text-left'>
                                    {education.title}
                                </h2>
                                <div
                                    key={index}
                                    className='mt-2 flex flex-col bg-white p-3 rounded-xl h-52 relative shadow-md text-left '
                                >
                                    <p className='text-myDarkGray font-semibold sm:text-xl text-md'>
                                        {education.skills.map((skill) => {
                                            return <p>{skill}</p>;
                                        })}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
                <div className='flex gap-16 px-4 items-center w-full'>
                    {skillArr.map((education, index) => {
                        return (
                            <div className='flex flex-col xl:w-full w-0 h-0 xl:h-full xl:visible invisible items-center'>
                                <h2 className='text-mySkillSubSkill font-bold xl:text-2xl text-xl text-left'>
                                    {education.title}
                                </h2>
                                <div
                                    key={index}
                                    className='mt-2 flex flex-col margin-auto bg-white p-3 rounded-xl xl:w-full w-0 h-0 xl:h-52 xl:visible invisible relative shadow-lg text-left justify-between'
                                >
                                    <p className='text-myDarkGray font-semibold text-xl'>
                                        {education.skills.map((skill) => {
                                            return <p>{skill}</p>;
                                        })}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='xl:mt-10'>
                <p className='xl:text-xl text-center sm:text-lg text-sm text-myBlue'>{tools['title']}</p>
                <p className='xl:text-2xl text-center sm:text-xl text-md text-mySkillTools'>
                    {tools['skills'].join(' ')}
                </p>
            </div>
        </div>
    );
}

export default Skill;
