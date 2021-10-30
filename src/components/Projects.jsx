import React from 'react';
import Project from '../assets/helpers/projects/projects';

function Projects() {
    return (
        <section id='projects' className='bg-myDarkGray body-font min-h-screen'>
            <div className='container px-5 py-10 mx-auto'>
                <div className='flex flex-col w-full'>
                    <h5 className='text-myYellow font-semibold text-2xl mb-2 ml-2'>MY PORTFOLIO</h5>
                    <h1 className='title-font lg:text-7xl sm:text-4xl text-3xl font-extrabold text-myWhite relative'>
                        Projects
                    </h1>
                    <div className='flex mt-8 place-items-center'>
                      <span className='text-myYellowLow font-semibold text-2xl mb-2'>SORT BY:</span>
                      <select className='text-myYellowLow font-semibold text-2xl mb-2 ml-2 bg-transparent outline-none appearance-none focus:ring-0 border-none' >
                        <option value="Relevance">RELEVANCE</option>
                      </select>
                    </div>
                </div>
                <div className='flex flex-wrap -m-4'>
                    <Project />
                </div>
            </div>
        </section>
    );
}

export default Projects;
