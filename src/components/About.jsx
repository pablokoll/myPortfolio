import React from 'react';
import EmojiPablo from '../assets/gif/output-onlinegiftools (1).gif';

function About() {
    return (
        <section id='about'>
            <div className='flex xl:flex-row flex-col items-center'>
                <div className='container px-10 py-10 mx-auto md:flex md:flex-row-reverse w-full justify-start'>
                    <div className='mb-10 xl:w-2/3'>
                    <h5 className='text-myBlue font-bold xl:text-2xl md:text-lg mb-2 text-shadow bg-myButtonFill xl:w-32 rounded-xl py-1 px-4 xl:px-5 w-24 xl:mb-4'>ABOUT</h5>
                        <div className='flex items-center'>
                            <h1 className='xl:text-6xl md:text-5xl sm:text-4xl text-2xl font-black text-myDarkGray relative'>
                                Who I am ?
                            </h1>
                            <div className=' w-20 h-20 relative xl:hidden'><img className='relative' src={EmojiPablo} alt='pabloGif' /></div>
                        </div>
                        <p className='mb-8 font-medium md:text-2xl text-xl text-myTextBlue text-opacity-75 text-left'>
                            I am <span className='text-myTextBlue font-bold'>Full Stack developer </span> with <span className='text-myTextBlue font-bold'> experience</span> developing Front-end and Back-end applications for  <span className='text-myTextBlue font-bold'>web</span> and <span className='text-myTextBlue font-bold'> mobile </span>. During the pandemic i was encouraged to get into IT and I'm excited to be able to work on something that I enjoy and can continue learning.
                        </p>
                        <p className='mb-8 font-medium md:text-2xl text-xl text-myTextBlue text-opacity-75 text-left'>
                            I am looking for <span className='text-myTextBlue font-bold'> new challenges </span> where I can bring my experience and
                            knowledge. I am looking for a position that will allow me to continue
                            learning and developing as a professional.
                        </p>
                    </div>
                    {/* <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex flex-col justify-between'>
                    </div> */}
                <div className='xl:visible invisible w-0 h-0 xl:w-2/3 xl:h-full'>
                    <img className='' src={EmojiPablo} alt='pabloGif' />
                </div>
                </div>
            </div>
        </section>
    );
}

export default About;
