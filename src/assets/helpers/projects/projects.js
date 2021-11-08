import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import cocoMallLanding from '../../img/coco-mall/coco-mall landingpng.png';
import bffGalleryLanding from '../../img/bff-gallery/bff-gallery-landingpng.png';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const projectArr = [
    {
        title: 'COCO mall',
        subTitle: 'Marketplace',
        img: cocoMallLanding,
        tech: 'Javascript, React and Node.js',
        description:
            ' COCO mall is a marketplace for all your needs, we offer a  enterprises can create yours shops in we platform, in this app you can post a lot of products, share the ubication of store with..',
    },
    {
        title: 'BFF-Gallery',
        subTitle: 'Dogs Gallery',
        img: bffGalleryLanding,
        tech: 'Javascript, React and Node.js',
        description:
            ' BFF-Gallery is a dog-friendly of different breeds, in there you can se than more  172 breed. In the APP you can filter for the temperaments of breeds, searching a breed with name, order alphabetical ascendant or descendant, order for the range weight of dogs and filter breeds of..',
    },
];

function Project() {
    const ref = useRef();
    return (
        <div className='flex flex-col xl:flex-row gap-8 mt-4 m-auto container items-start'>
            {projectArr.map((project, index) => {
                return (
                    <Flippy
                        ref={ref}
                        flipOnHover={true}
                        flipOnClick={true}
                        flipDirection='horizontal'
                        className='mt-2 flex flex-col margin-auto bg-black lg:p-4 p-2 rounded-3xl transform group relative w-full h-full'
                    >
                        <FrontSide key={index} className=''>
                            <h2 className='text-myWhite font-extrabold lg:text-3xl sm:text-xl pb-2'>
                                {project.title}
                            </h2>
                            <h4 className='text-myGray font-bold lg:text-xl text-lg pb-2'>
                                {project.subTitle}
                            </h4>
                            <img
                                src={project.img}
                                alt={project.title}
                                className='w-full rounded-xl'
                            />
                        </FrontSide>
                        <BackSide
                            key={index}
                            className='w-full flex flex-col justify-between relative '
                        >
                            <div>
                                <h2 className='text-myWhite font-extrabold lg:text-3xl sm:text-xl lg:pb-2 pb-1'>
                                    {project.title}
                                </h2>
                                <h2 className='text-myTextBlue font-bold lg:text-xl text-lg pb-1'>
                                    Technologies
                                </h2>
                                <p className='text-myWhite font-semibold lg:text-lg text-sm lg:pb-4 pb-2'>
                                    {project.tech}
                                </p>
                                <div className='flex flex-col md:visible invisible md:h-full h-0'>
                                    <h2 className='text-myTextBlue font-bold lg:text-xl text-lg pb-1'>
                                        Description
                                    </h2>
                                    <p className='text-myWhite font-semibold lg:text-lg text-sm pb-1'>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                            <Link to={`/project/${project.title}`} className='w-full'>
                                <button className='font-semibold text-myBlue bg-myButtonFill border-0 md:py-2 md:px-4 px-2 focus:outline-none rounded-full sm:text-lg w-30  md:w-40 lg:w-64 h-12 justify-center items-center cursor-pointer hover:text-myWhite text-md hover:bg-myTextBlue whitespace-nowrap relative'>
                                    View More
                                </button>
                            </Link>
                        </BackSide>
                    </Flippy>
                );
            })}
            {/* {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))} */}
        </div>
    );
}

export default Project;
