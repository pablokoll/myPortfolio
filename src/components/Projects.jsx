import React from 'react';
import Project from '../assets/helpers/projects/projects';

function Projects() {
    return (
        <section id='projects' className='bg-myDarkGray body-font pb-16 rounded-2xl'>
            <div className='container px-10 py-10 mx-auto'>
                <div className='flex flex-col w-full mb-6'>
                <h5 className='text-myButtonFill font-bold xl:text-2xl md:text-lg mb-2 text-shadow bg-myGray2 xl:w-44 rounded-xl py-1 px-2 sm:px-3 xl:px-5 sm:w-32 w-28 text-md xl:mb-4'>PORTFOLIO</h5>
                    <h1 className='xl:text-6xl md:text-5xl sm:text-4xl text-2xl font-black text-myWhite relative w-full '>
                        Projects
                    </h1>
                </div>
                <div className='flex -m-4'>
                    <Project />
                </div>
            </div>
        </section>
    );
}

export default Projects;
