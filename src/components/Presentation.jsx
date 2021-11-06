import React from 'react';
import PabloPP from '../assets/img/Pablo-Koll-PP.jpg';
import Typewriter from 'typewriter-effect';

function Presentation() {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <section id='presentation'>
            <div className='flex lg:flex-row flex-col  items-center min-h-screen justify-center'>
                <div className='container flex px-10 lg:py-20 md:py-4 lg:flex-row flex-col-reverse lg:items-center justify-center'>
                    <div className='lg:flex-grow lg:w-1/2 lg:pr-12 flex flex-col md:items-start lg:text-left items-center lg:justify-center h-screen lg:h-full justify-evenly'>
                        <div className='flex items-center w-full mb-3 lg:flex-row flex-col'>
                            <img
                                className='object-cover object-center lg:hidden h-14 w-14 rounded-full mr-2 md:h-20 md:w-20'
                                alt='Pablo_Koll'
                                src={PabloPP}
                            />
                            <h5 className='text-myBlue font-bold text-md sm:text-xl md:text-2xl'>
                                &#123; HI, I AM PABLO KOLL
                            </h5>
                        </div>
                        <div className='text-center lg:text-left'>
                            <div className='mb-4 w-full lg:flex-row flex flex-col text-center lg:text-left'>
                                <h1 className=' xl:text-6xl md:text-5xl sm:text-4xl text-2xl font-black text-myDarkGray relative w-full  text-center lg:text-left items-center justify-center'>
                                    Logic Resolution
                                    <br />
                                    <div className='flex gap-2 w-full justify-center lg:justify-start text-center lg:text-left'>
                                        <span>In</span>
                                        <Typewriter
                                            className='title-font xl:text-6xl sm:text-4xl text-2xl font-black text-myDarkGray relative w-full  text-center lg:text-left'
                                            options={{
                                                strings: ['Front-end', 'Back-end', 'Full-Stack'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </div>
                                </h1>
                            </div>
                            <p className='lg:text-2xl md:mb-8 font-medium md:text-2xl xl:w-2/3 text-myTextPresent sm:text-xl text-lg w-full'>
                                Experience in creation apps from Front-end and Back-end &#125;
                            </p>
                        </div>
                        <div className='flex lg:gap-6 sm:gap-12 gap-2 lg:w-full lg:items-start align-middle lg:flex-row flex-col items-center justify-center self-center'>
                            <div
                                onClick={scrollToBottom}
                                className='font-semibold inline-flex text-myBlue bg-myButtonFill border-0 md:py-2 md:px-4 px-2 focus:outline-none rounded-full sm:text-lg w-30  md:w-40 lg:w-64 h-12 justify-center items-center cursor-pointer hover:text-myWhite text-md hover:bg-myTextBlue shadow whitespace-nowrap self-center'
                            >
                                GET STARTED
                            </div>
                            <a
                                href='https://drive.google.com/file/d/1Bct8EOkiFPlZ6b8Z40p9b6rJWFUF9hw-/view?usp=sharing'
                                target='_blank'
                                rel='noreferrer'
                                className='font-semibold text-myBlue border-0 py-2 focus:outline-none md:text-lg cursor-pointer hover:text-myTextBlue text-shadow lg:w-full relative self-center text-md whitespace-nowrap'
                            >
                                DOWNLOAD CV
                            </a>
                            
                        </div>
                    </div>
                    <div className='w-2/5'>
                        <img
                            className='object-cover object-center lg:w-full lg:h-full lg:rounded-3xl lg:visible invisible h-0 w-0'
                            alt='Pablo_Koll'
                            src={PabloPP}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Presentation;
