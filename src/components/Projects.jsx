import React from 'react';
import Project from '../assets/helpers/projects/projects';

function Projects() {
    return (
        <section id='projects' className='bg-myDarkGray body-font min-h-screen rounded-2xl'>
            <div className='container px-10 py-10 mx-auto'>
                <div className='flex flex-col w-full mb-6'>
                    <h5 className='text-myButtonFill bg-myGray2 font-semibold md:text-2xl text-lg mb-2 text-shadow rounded-lg w-28 px-2 md:w-40 md:px-4 md:py-1'>PORTFOLIO</h5>
                    <h1 className='title-font lg:text-7xl sm:text-4xl text-4xl font-black text-myWhite relative'>
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
