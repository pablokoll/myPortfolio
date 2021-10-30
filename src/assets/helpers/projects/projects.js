import React from 'react'
import {Link} from 'react-router-dom'
import cocoMallLanding from '../../img/coco-mall/coco-mall landingpng.png'
import bffGalleryLanding from '../../img/bff-gallery/bff-gallery-landingpng.png'

const projectArr = [
    {
        title: 'COCO mall',
        subTitle: 'Marketplace',
        img: cocoMallLanding
    },
    {
        title: 'BFF-Gallery',
        subTitle: 'Dogs Gallery',
        img: bffGalleryLanding
    }
]

function Project() {
   
    return (
        <div className='flex gap-8 mx-10 mt-4 m-auto container'>
            {projectArr.map((project, index) => {
                return (
                    <Link to={`/project/${project.title}`}>
                    <div key={index} className="mt-2 flex flex-col margin-auto bg-black p-4 rounded-3xl cursor-pointer">
                        <h2 className='text-myWhite font-extrabold text-3xl'>{project.title}</h2>
                        <h4 className='text-myGray font-bold text-xl'>{project.subTitle}</h4>
                        <img src={project.img} alt={project.title} className='w-full rounded-xl'/>
                    </div>
                    </Link>
                )
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
    )
}

export default Project





    
