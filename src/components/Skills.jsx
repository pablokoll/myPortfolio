import React from 'react';
import Education from '../assets/helpers/skills/education';
import Experience from '../assets/helpers/skills/experience';
import Skill from '../assets/helpers/skills/myskills';

function Skills() {
    return (
        <section id='skills'>
            <div className='flex md:flex-row flex-col items-center min-h-screen min-w-full'>
                <div className='container px-10 py-10 mx-auto'>
                    <div className='md:mb-8 mb-2'>
                    <h5 className='text-myBlue font-bold xl:text-2xl md:text-lg mb-2 text-shadow bg-myButtonFill xl:w-32 rounded-xl py-1 px-4 xl:px-5 w-24 xl:mb-4'>SKILLS</h5>
                        <h1 className='xl:text-6xl md:text-5xl sm:text-4xl text-2xl font-black text-myDarkGray relative w-full'>
                            Experience
                        </h1>
                    </div>
                    <div className='mx-auto mb-2 '>
                        <div className='mb-8'>
                            <Education />
                        </div>
                        <div className='mb-8'>
                            <Experience />
                        </div>
                        <div className='mb-8'>
                            <Skill />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
