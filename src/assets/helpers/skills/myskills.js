import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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

    return (
        <div className='mb-4'>
            <h3 className='title-font lg:text-4xl sm:text-2xl text-3xl mb-4 font-semibold text-mySkillSkill relative bg-mySkillOrange rounded-lg px-4'>
                Skills
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
                    {skillArr.map((education, index) => {
                        return (
                            <div className='flex flex-col w-full '>
                                <h2 className='text-mySkillSubSkill font-bold md:text-2xl text-xl text-left'>
                                    {education.title}
                                </h2>
                                <div
                                    key={index}
                                    className='mt-2 flex flex-col margin-auto bg-white py-3 px-4 rounded-xl w-52 h-52 relative shadow-md text-left'
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
                </Carousel>
                <div className='flex gap-16 px-4 items-center'>
                    {skillArr.map((education, index) => {
                        return (
                            <div className='flex flex-col md:w-full w-0 h-0 md:h-full md:visible invisible items-center'>
                                <h2 className='text-mySkillSubSkill font-bold md:text-2xl text-xl text-left'>
                                    {education.title}
                                </h2>
                                <div
                                    key={index}
                                    className='mt-2 flex flex-col margin-auto bg-white p-3 rounded-xl md:w-64 w-0 h-0 md:h-56 md:visible invisible relative shadow-lg text-left justify-between'
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
            <div className='md:mt-10'>
                <p className='md:text-xl text-center text-myBlue'>{tools['title']}</p>
                <p className='md:text-2xl text-center text-lg text-mySkillTools'>
                    {tools['skills'].join(' ')}
                </p>
            </div>
        </div>
    );
}

export default Skill;
