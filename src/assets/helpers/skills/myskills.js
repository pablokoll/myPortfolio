import React from 'react';

function Skill() {
    const skillArr = [
        {
            title: 'LANGUAGES',
            skills: ['Javascript', 'Typescript'],
        },
        {
            title: 'FRONT END',
            skills: ['HTML', 'CSS', 'Tailwind', 'React (Hooks)', 'React Native', 'Redux'],
        },
        {
            title: 'BACK END',
            skills: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'PostgreSQL', 'MongoDB'],
        },
        {
            title: 'TOOLS',
            skills: ['Git', 'GitHub', 'Scrum'],
        },
    ];

    return (
        <div className='mb-4'>
            <h3 className='title-font lg:text-4xl sm:text-2xl text-3xl mb-4 font-semibold text-myDarkGray relative'>
                Skills
            </h3>
            <div className='flex gap-5 mx-2 '>
                {skillArr.map((education, index) => {
                    return (
                        <div className='flex flex-col w-full'>
                            <h2 className='text-myNightBlue font-bold text-2xl '>
                                {education.title}
                            </h2>
                            <div
                                key={index}
                                className='mt-2 flex flex-col margin-auto bg-white p-3 rounded-xl w-full h-64 relative'
                            >
                                <p className='text-myDarkGray font-normal text-lg'>
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
    );
}

export default Skill;
