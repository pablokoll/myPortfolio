import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
// import cocoMallLanding from '../../img/coco-mall/coco-mall landingpng.png'
// import cocoMallHome from '../../img/coco-mall/coco-mall home.png'
// import cocoMallDetail from '../../img/coco-mall/coco-mall detail.png'
// import cocoMallCart from '../../img/coco-mall/coco-mall cart.png'

function CocoMall() {
    const skillArr = [
        {
            title: 'FRONT END',
            skills: ['HTML', 'CSS', 'React (Hooks)', 'Redux', 'Tailwind', 'Figma'],
        },
        {
            title: 'BACK END',
            skills: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL'],
        },
        {
            title: 'TOOLS',
            skills: ['Git', 'GitHub', 'Firebase', 'Mercado Pago', 'Google Maps API', 'Heroku', 'Vercel'],
        },
    ];

    return (

<div className='flex relative items-center min-h-screen w-full '>
    <div className='flex flex-col md:container px-5 lg:px-16 xl:px-6 py-5 md:mx-auto items-center xl:w-3/4 w-full h-full '>
        <div className='flex items-center gap-5 relative w-full xl:w-3/4 justify-center'>
            <span className='self-start absolute left-0 xl-left-20'>
                <Link to='/'>
                    <BsFillArrowLeftCircleFill className='h-8 w-8 text-myDarkGray hover:text-myBlue' />
                </Link>
            </span>
            <div className='flex items-center flex-col sm:flex-row mb-4 justify-center'>
                <h2 className='title-font lg:text-5xl sm:text-4xl text-3xl font-extrabold text-myDarkGray relative whitespace-nowrap'>
                    COCO mall
                </h2>
                <span className='text-myBlue font-bold text-shadow items-center justify-center ml-2'>
                    Marketplace
                </span>
            </div>
        </div>
        <div className='flex relative xl:w-3/4 w-full justify-center'>
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
        <div className='flex flex-col xl:w-3/4 w-full justify-center items-center py-2'>
            <div className='flex flex-col mt-4 w-full'>
                <h5 className='text-myBlue font-semibold text-xl text-shadow'>JAVASCRIPT</h5>
                <h4 className='text-myDarkGray font-bold text-3xl mb-2'>Technologies</h4>
                <div className='flex items-center w-full'>
                    <div className='w-full items-center justify-center relative mb-2 px-2'>
                        {skillArr.map((education, index) => {
                            return (
                                <div className='flex flex-col 2xl:flex-row items-center mb-1 '>
                                    <h2 className='text-myNightBlue font-bold xl:text-2xl sm:text-xl text-md text-left mr-2 self-start whitespace-nowrap'>
                                        {education.title}
                                    </h2>
                                    <p className='flex flex-wrap 2xl:flex-nowrap self-start'>
                                        {education.skills.map((skill) => {
                                            return (
                                                <span className='text-myDarkGra mr-2 font-semibold sm:text-lg text-md 2xl:whitespace-nowrap'>
                                                    {skill}
                                                </span>
                                            );
                                        })}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-4'>
                <h4 className='text-myDarkGray font-bold text-3xl mb-4'>Description</h4>
                <p className='text-left px-2 mb-1'>
                    COCO mall is a marketplace for all your needs, we offer a possibility to
                    enterprises can create yours shops in we platform, in this app you can post a
                    lot of products, share the ubication of store with Google Maps API and
                    management of stock. The user can explore the all stores with complete
                    flexibility, can add to cart a products of different stores, and realize the
                    order in one payment.
                </p>
                <p className='text-left px-2'>
                    Users can post reviews of the stores, and public questions in the products. The
                    page count with panel of user and stores, in this place you can administrate a
                    store, products, orders, user info, etc.. Also we have a user administrator he
                    can control all the stores, products and users.
                </p>
                <h4 className='text-myDarkGray font-bold text-3xl mb-4 mt-4'>Experience</h4>
                <p className='text-left px-2'>
                    During the project, I learned different things, mainly teamwork. This work was
                    done by 8 people, where we had 1 month to carry it out. Part of the learning was
                    using the SCRUM methodology, version management with GitHub and the discussions
                    of how we were going to organize the tasks. It is a project where I learned a
                    lot and had fun doing it.
                </p>
            </div>
        </div>
    </div>
</div>
    );
}

export default CocoMall;

