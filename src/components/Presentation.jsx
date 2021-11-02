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
            <div className='flex md:flex-row flex-col items-center min-h-screen'>
                <div className='container flex px-10 py-20 md:flex-row flex-col items-center'>
                    <div className='lg:flex-grow md:w-1/2 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center '>
                        <h5 className='text-myYellow font-semibold text-2xl mb-2 text-shadow'>
                            &#123; HI, I AM PABLO KOLL
                        </h5>
                        <div className='mb-4 w-full'>
                            <h1 className='title-font lg:text-6xl sm:text-4xl text-3xl font-extrabold text-myDarkGray relative w-full'>
                                Logic Resolution in
                                <br />
                            <Typewriter
                                className='title-font lg:text-6xl sm:text-4xl text-3xl font-extrabold text-myDarkGray relative w-full'
                                options={{
                                    strings: ['Front end', 'Back end', 'Full stack'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            </h1>
                        </div>
                        <p className='mb-8 font-medium text-2xl w-2/3 text-myNightBlue'>
                            Experience in creation apps from Front-end and Back-end &#125;
                        </p>
                        <div className='flex flex-initial justify-start gap-6'>
                            <div
                                onClick={scrollToBottom}
                                className='font-semibold inline-flex text-myYellow bg-myYellowLow border-0 py-2 px-6 focus:outline-none rounded-full text-lg cursor-pointer hover:text-myDarkGray hover:bg-myYellow shadow-lg'
                            >
                                GET STARTED
                            </div>
                            <a
                                href='https://drive.google.com/file/d/1Bct8EOkiFPlZ6b8Z40p9b6rJWFUF9hw-/view?usp=sharing'
                                target='_blank'
                                rel='noreferrer'
                                className='font-semibold inline-flex text-myYellow border-0 py-2  focus:outline-none text-lg cursor-pointer hover:text-myDarkGray text-shadow'
                            >
                                DOWNLOAD MY CV
                            </a>
                        </div>
                    </div>
                    <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                        <img
                            className='object-cover object-center rounded-3xl'
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
