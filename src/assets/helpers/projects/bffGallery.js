import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
// import bffGalleryLanding from '../../img/bff-gallery/bff-gallery-landingpng.png'
// import bffGalleryHome from '../../img/bff-gallery/bff-gallery-home.png'
// import bffGalleryDetail from '../../img/bff-gallery/bff-gallery-detail.png'
// import bffGalleryCreate from '../../img/bff-gallery/bff-gallery-create.png'

function BffGallery() {
    return (
        <div className='flex relative items-center min-h-screen w-full '>
            <span className='absolute top-6 md:top-16 md:left-1/4 left-3'>
                <Link to='/'>
                    <BsFillArrowLeftCircleFill className='h-8 w-8 text-myDarkGray hover:text-myYellow' />
                </Link>
            </span>
            <div className='flex flex-col md:container px-6 py-5 md:mx-auto items-center md:w-2/3 w-full h-full'>
                <div className='flex items-center gap-5'>
                    <h2 className='title-font lg:text-5xl sm:text-4xl text-3xl mb-4 font-extrabold text-myDarkGray relative'>
                        BFF Gallery
                    </h2>
                    <span className='text-myYellow font-bold text-shadow'>Dog Gallery</span>
                </div>
                <div className='flex relative md:w-2/3 w-full justify-center'>
                    <iframe
                        className='rounded-2xl w-full'
                        width='500'
                        height='281'
                        src='https://www.youtube.com/embed/DZSKzRWOTZY'
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                    ></iframe>
                </div>
                <div className='flex flex-col md:w-2/3 justify-center items-center py-2'>
                    <div>
                        <div className='flex flex-col mt-4'>
                            <h5 className='text-myYellow font-semibold text-xl text-shadow'>JAVASCRIPT</h5>
                            <h4 className='text-myDarkGray font-bold text-3xl mb-2'>
                                Technologies
                            </h4>
                            <div className='flex justify-between items-center px-2'>
                                <ul className='flex flex-col text-myDarkGray'>
                                    <li className='text-myNightBlue font-semibold text-lg'>
                                        Front-end
                                    </li>
                                    <li className=''>React (Hooks)</li>
                                    <li className=''>Redux</li>
                                    <li className=''>CSS (vanilla)</li>
                                    <li className='invisible'>Figma</li>
                                </ul>
                                <ul className='flex flex-col justify-start text-myDarkGray'>
                                    <li className='text-myNightBlue font-semibold text-lg'>
                                        Back-end
                                    </li>
                                    <li className=''>Node.js</li>
                                    <li className=''>Express</li>
                                    <li className=''>Sequelize</li>
                                    <li className=''>PostgreSQL</li>
                                </ul>
                                <ul className='flex flex-col justify-start text-myDarkGray'>
                                    <li className='text-myNightBlue font-semibold text-lg'>
                                        Tools
                                    </li>
                                    <li className=''>GitHub</li>
                                    <li className=''>Thedogapi</li>
                                    <li className='hidden'>Mercado Pago</li>
                                    <li className='hidden'>Google Maps API</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col mt-4'>
                            <h4 className='text-myDarkGray font-bold text-3xl mb-4'>Description</h4>
                            <p className='text-left px-2'>
                                BFF-Gallery is a dog-friendly of different breeds, in there you can
                                se than more 172 breed. In the APP you can filter for the
                                temperaments of breeds, searching a breed with name, order
                                alphabetical ascendant or descendant, order for the range weight of
                                dogs and filter breeds of the API or the database. Also you can
                                create your fantasy breed this is a controlled form, with
                                validation. When you create a breed you can choose a image, name,
                                weight and others characteristics. The APP counts with a section of
                                favorites, and you can visualize on detail all breeds!
                            </p>
                            <h4 className='text-myDarkGray font-bold text-3xl mb-4 mt-4'>
                                Experience
                            </h4>
                            <p className='text-left px-2'>
                                This is my first project Full Stack, I could learning a lot of
                                things for example the magic connection between the Front end and
                                Back end, using a API with my database and sending both datas.
                                I have a lot of appreciation for this project because it made me understand many things, unite all the things I had learned and obtain this result being the first time, I am really very happy with what was obtained.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BffGallery;
