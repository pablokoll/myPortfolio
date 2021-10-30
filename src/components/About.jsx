import React from 'react';

function About() {
    return (
        <section id='about'>
            <div className='flex md:flex-row flex-col items-center min-h-screen'>
                <div className='container mx-auto flex px-10 py-20 md:flex-row-reverse flex-col-reverse items-center '>
                    <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center'>
                        <h5 className='text-myYellow font-semibold text-2xl mb-2'>ABOUT</h5>
                        <h1 className='title-font lg:text-7xl sm:text-4xl text-3xl mb-4 font-extrabold text-myDarkGray relative'>
                            Who I am ?
                        </h1>
                        <p className='mb-8 font-medium text-2xl text-myDarkGray text-justify'>
                            I am a Full Stack developer with experience in Front-end and Back-end
                            application development. During the pandemic i was encouraged to get
                            into IT and I'm excited to be able to work on something that I enjoy.
                        </p>
                        <p className='mb-8 font-medium text-2xl text-myDarkGray text-justify'>
                            I am currently still studying to improve my knowledge and be able to give better logical solutions, about web and mobile development. 
                        </p>
                        <p className='mb-8 font-medium text-2xl text-myDarkGray text-justify'>
                            I love working in a team, I believe that with a good organization you can
                            achieve very good results. 
                        </p>
                        <p className='mb-8 font-medium text-2xl text-myDarkGray text-justify'>
                            I am looking for new challenges where I can
                            bring my experience and knowledge. I am looking for a position that will
                            allow me to continue learning and developing as a professional.
                        </p>
                        <p className='mb-8 font-medium text-2xl text-myDarkGray text-justify'>
                            Self-taught in constant learning, fond of sports, cycling and
                            programming.
                        </p>
                    </div>
                    <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                        {/* <img
              className="object-cover object-center rounded-3xl"
              alt="hero"
              src={PabloCB}
            /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
