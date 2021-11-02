import React from 'react';
import {Link} from 'react-router-dom'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
// import cocoMallLanding from '../../img/coco-mall/coco-mall landingpng.png'
// import cocoMallHome from '../../img/coco-mall/coco-mall home.png'
// import cocoMallDetail from '../../img/coco-mall/coco-mall detail.png'
// import cocoMallCart from '../../img/coco-mall/coco-mall cart.png'

function CocoMall() {
    return (
        <div className='flex relative items-center min-h-screen '> 
        <span className='absolute top-16 left-1/4'>
                <Link to='/'>
                <BsFillArrowLeftCircleFill className='h-8 w-8 text-myDarkGray hover:text-myYellow'/>
                </Link>
            </span>
        <span className='transform rotate-90 absolute -left-6 text-3xl text-myNightBlue hover:text-myDarkGrayLow cursor-default'>Previous</span>
        <Link to='/project/BFF-Gallery'>
        <span className='transform -rotate-90 absolute right-0 text-3xl text-myNightBlue hover:text-myYellow'>Next</span>
        </Link>
            <div className='flex flex-col container px-5 py-5 mx-auto items-center bg-white w-2/3 h-full'>
                <div className='flex items-center gap-5 relative '>
                    
                    <h2 className='title-font lg:text-5xl sm:text-4xl text-3xl mb-4 font-extrabold text-myDarkGray relative'>
                        COCO mall
                    </h2>
                    <span className='text-myYellow font-bold'>Marketplace</span>
                </div>
                <div className='flex relative w-2/3 justify-center'>
                    <iframe
                        className='rounded-2xl w-full'
                        width='500'
                        height='281'
                        src='https://www.youtube.com/embed/Yr-K0FOLEFY'
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                    ></iframe>
                </div>
                <div className='flex flex-col w-2/3 justify-center items-center py-2'>
                    <div>
                        <div className='flex flex-col mt-4'>
                            <h5 className='text-myYellow font-semibold text-lg'>JAVASCRIPT</h5>
                            <h4 className='text-myDarkGray font-bold text-3xl mb-2 '>
                                Technologies
                            </h4>
                            <div className='flex justify-between items-center px-2'>
                                <ul className='flex flex-col text-myDarkGray'>
                                    <li className='text-myNightBlue font-semibold text-lg'>
                                        Front-end
                                    </li>
                                    <li className=''>React (Hooks)</li>
                                    <li className=''>Redux</li>
                                    <li className=''>Tailwind</li>
                                    <li className=''>Figma</li>
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
                                    <li className=''>Firebase</li>
                                    <li className=''>Mercado Pago</li>
                                    <li className=''>Google Maps API</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col mt-4'>
                            <h4 className='text-myDarkGray font-bold text-3xl mb-4'>Description</h4>
                            <p className='text-justify px-2'>
                                COCO mall is a marketplace for all your needs, we offer a
                                possibility to enterprises can create yours shops in we platform, in
                                this app you can post a lot of products, share the ubication of
                                store with Google Maps API and management of stock. The user can
                                explore the all stores with complete flexibility, can add to cart a
                                products of different stores, and realize the order in one payment.
                                Users can post reviews of the stores, and public questions in the
                                products. The page count with panel of user and stores, in this
                                place you can administrate a store, products, orders, user info,
                                etc.. Also we have a user administrator he can control all the
                                stores, products and users.
                            </p>
                            <h4 className='text-myDarkGray font-bold text-3xl mb-4 mt-4'>
                                Experience
                            </h4>
                            <p className='text-justify px-2'>
                                During the course of the project, I learned different things, mainly
                                teamwork. This work was done by 8 people, where we had 1 month to
                                carry it out. Part of the learning was using the SCRUM methodology,
                                version management with GitHub and the discussions of how we were
                                going to organize the tasks. It is a project where I learned a lot
                                and had fun doing it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CocoMall;
