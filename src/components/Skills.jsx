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
                        <h5 className='text-myBlue font-bold md:text-2xl text-lg mb-2 text-shadow bg-myButtonFill md:w-28 rounded-xl py-1 px-4 md:px-4 w-24'>SKILLS</h5>
                        <h1 className='title-font lg:text-6xl  text-4xl font-black text-myDarkGray relative w-full'>
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
