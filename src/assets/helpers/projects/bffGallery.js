import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function BffGallery() {
    const skillArr = [
        {
            title: 'FRONT END',
            skills: ['HTML', 'CSS', 'React (Hooks)', 'Redux'],
        },
        {
            title: 'BACK END',
            skills: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL'],
        },
        {
            title: 'TOOLS',
            skills: ['Git', 'GitHub', 'Heroku', 'Vercel'],
        },
    ];

    const settings = {
        centerMode: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        swipeToSlide: true,
    };

    return (
        <div className='flex relative items-center min-h-screen w-full '>
            <span className='absolute top-6 md:top-16 md:left-1/4 left-3'>
                <Link to='/'>
                    <BsFillArrowLeftCircleFill className='h-8 w-8 text-myDarkGray hover:text-myBlue' />
                </Link>
            </span>
            <div className='flex flex-col md:container px-6 py-5 md:mx-auto items-center md:w-2/3 w-full h-full'>
                <div className='flex items-center gap-5'>
                    <h2 className='title-font lg:text-5xl sm:text-4xl text-3xl mb-4 font-extrabold text-myDarkGray relative'>
                        BFF Gallery
                    </h2>
                    <span className='text-myBlue font-bold text-shadow'>Dog Gallery</span>
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
                            <h5 className='text-myBlue font-semibold text-xl text-shadow'>
                                JAVASCRIPT
                            </h5>
                            <h4 className='text-myDarkGray font-bold text-3xl mb-2'>
                                Technologies
                            </h4>
                            <div className='flex gap-5 items-center w-full'>
                                <Slider
                                    {...settings}
                                    className='w-full items-center justify-center relative mb-10'
                                >
                                    {skillArr.map((education, index) => {
                                        return (
                                            <div className='flex flex-col items-center justify-center'>
                                                <h2 className='text-mySkillSubSkill font-bold xl:text-2xl sm:text-xl text-md text-left'>
                                                    {education.title}
                                                </h2>
                                                <div
                                                    key={index}
                                                    className='mt-2 flex flex-col bg-white p-3 rounded-xl h-36 relative shadow-md text-left '
                                                >
                                                    <p className='text-myDarkGray font-semibold sm:text-xl text-md'>
                                                        {education.skills.map((skill) => {
                                                            return <p>{skill}</p>;
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </Slider>
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
                                This is my first project full Stack, I codivd learning a lot of
                                things for example the magic connection between the Front end and
                                Back end, using a API with my database and sending both datas. I
                                have a lot of appreciation for this project because it made me
                                understand many things, unite all the things I had learned and
                                obtain this resdivt being the first time, I am really very happy
                                with what was obtained.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BffGallery;
