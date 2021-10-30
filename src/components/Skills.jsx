import { ChipIcon } from '@heroicons/react/solid';
import React from 'react';
import Education from '../assets/helpers/skills/education';
import Experience from '../assets/helpers/skills/experience';
import Skill from '../assets/helpers/skills/myskills';

function Skills() {
    return (
        <section id='skills'>
            <div className='flex md:flex-row flex-col items-center min-h-screen'>
                <div className='container px-5 py-10 mx-auto'>
                    <div className='mb-10'>
                        <h5 className='text-myYellow font-semibold text-2xl mb-2 ml-2'>SKILL</h5>
                        <h1 className='title-font lg:text-7xl sm:text-4xl text-3xl font-extrabold text-myDarkGray relative'>
                            Skills and Experience
                        </h1>
                    </div>
                    <div className='sm:mx-auto sm:mb-2'>
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
