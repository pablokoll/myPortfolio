import React from 'react';
import PabloPP from '../assets/img/Pablo-Koll-PP.jpg';

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
                    <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center '>
                        <h5 className='text-myYellow font-semibold text-2xl mb-2'>
                            &#123; HI, I AM PABLO KOLL
                        </h5>
                        <div className='mb-24 w-full'>
                            <h1 className='title-font lg:text-7xl sm:text-4xl text-3xl mb-4 font-extrabold text-myDarkGray relative'>
                                Logic Solution in
                            </h1>
                            <h1 className='title-font lg:text-7xl sm:text-4xl text-3xl mb-4 font-extrabold text-myDarkGray absolute max-w-60'>
                                Full Stack Development
                            </h1>
                        </div>
                        <p className='mb-8 font-medium text-2xl w-2/3 text-myNightBlue'>
                            Experience in creation apps from Front-end and Back-end &#125;
                        </p>
                        <div className='flex flex-initial justify-start gap-6'>
                            <div
                                onClick={scrollToBottom}
                                className='font-semibold inline-flex text-myYellow bg-myYellowLow border-0 py-2 px-6 focus:outline-none rounded-lg text-lg cursor-pointer'
                            >
                                GET STARTED
                            </div>
                            <a
                                href='https://drive.google.com/file/d/1Bct8EOkiFPlZ6b8Z40p9b6rJWFUF9hw-/view?usp=sharing'
                                target='_blank'
                                rel='noreferrer'
                                className='font-semibold inline-flex text-myYellow border-0 py-2  focus:outline-none text-lg cursor-pointer'
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
