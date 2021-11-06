import React from 'react';
import PabloPP from '../assets/img/Pablo-Koll-PP.jpg';
import Typewriter from 'typewriter-effect';
import EmojiPablo from '../assets/gif/output-onlinegiftools (1).gif';

function Presentation() {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <section id='presentation'>
            <div className='flex lg:flex-row flex-col items-center min-h-screen '>
                <div className='container flex px-10 lg:py-20 md:py-4 lg:flex-row flex-col-reverse lg:items-center'>
                    <div className='lg:flex-grow lg:w-1/2 lg:pr-12 flex flex-col md:items-start lg:text-left items-center lg:justify-center h-screen lg:h-full justify-around'>
                        <div className='flex items-center w-full mb-3'>
                            <img
                                className='object-cover object-center lg:hidden h-10 w-10 rounded-full mr-2 md:h-24 md:w-24'
                                alt='Pablo_Koll'
                                src={PabloPP}
                            />
                            <h5 className='text-myBlue font-bold text-xl md:text-2xl'>
                                &#123; HI, I AM PABLO KOLL
                            </h5>
                        </div>
                        <div>
                            <div className='mb-4 w-full'>
                                <h1 className=' xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-black text-myDarkGray relative w-full'>
                                    Logic Resolution
                                    <br />
                                    <div className='flex gap-2 w-full'>
                                        <span>In</span>
                                        <Typewriter
                                            className='title-font xl:text-6xl sm:text-4xl text-3xl font-black text-myDarkGray relative w-full'
                                            options={{
                                                strings: ['Front-end', 'Back-end', 'Full-Stack'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </div>
                                </h1>
                            </div>
                            <p className='lg:text-2xl md:mb-8 font-medium md:text-2xl xl:w-2/3 text-myTextPresent text-xl w-full mb-6'>
                                Experience in creation apps from Front-end and Back-end &#125;
                            </p>
                        </div>
                        <div className='flex lg:flex-initial lg:justify-start lg:gap-6 md:gap-12 gap-4 lg:w-full items-center'>
                            <div
                                onClick={scrollToBottom}
                                className='font-semibold inline-flex text-myBlue bg-myButtonFill border-0 md:py-2 md:px-4 px-2 focus:outline-none rounded-full md:text-lg w-44 lg:w-64 h-12 justify-center items-center cursor-pointer hover:text-myWhite hover:bg-myTextBlue shadow self-center'
                            >
                                GET STARTED
                            </div>
                            <a
                                href='https://drive.google.com/file/d/1Bct8EOkiFPlZ6b8Z40p9b6rJWFUF9hw-/view?usp=sharing'
                                target='_blank'
                                rel='noreferrer'
                                className='font-semibold text-myBlue border-0 py-2 focus:outline-none md:text-lg cursor-pointer hover:text-myTextBlue text-shadow lg:w-full relative self-center'
                            >
                                DOWNLOAD CV
                            </a>
                            
                        </div>
                        {/* <div className='md:invisible md:w-0 md:h-0 w-full h-full bottom-0'>
                            <img className='' src={EmojiPablo} alt='pabloGif' />
                        </div> */}
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
