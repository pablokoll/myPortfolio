import React from 'react';
import Project from '../assets/helpers/projects/projects';

function Projects() {
    return (
        <section id='projects' className='bg-myDarkGray body-font pb-16 rounded-2xl'>
            <div className='container px-10 py-10 mx-auto'>
                <div className='flex flex-col w-full mb-6'>
                <h5 className='text-myButtonFill font-bold xl:text-2xl text-lg mb-2 text-shadow bg-myGray2 xl:w-36 rounded-xl py-1 px-3 xl:px-5 w-32 xl:m-0'>PORTFOLIO</h5>
                    <h1 className='title-font lg:text-6xl sm:text-4xl text-4xl font-black text-myWhite relative '>
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
