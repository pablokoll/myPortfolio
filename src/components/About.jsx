import React from 'react';

function About() {
    return (
        <section id='about'>
            <div className='flex md:flex-row flex-col items-center'>
                <div className='container px-5 py-10 mx-auto'>
                    <div className='mb-10'>
                        <h5 className='text-myYellow font-semibold text-2xl mb-2 text-shadow'>ABOUT</h5>
                        <h1 className='title-font lg:text-7xl sm:text-4xl text-3xl mb-4 font-extrabold text-myDarkGray relative'>
                            Who I am ?
                        </h1>

                        <p className='mb-8 font-medium text-2xl text-myDarkGray text-justify'>
                            I am a <span className='text-myNightBlue font-semibold'>Full Stack developer </span> with <span className='text-myNightBlue font-semibold'> experience</span> developing Front-end and Back-end applications for  <span className='text-myNightBlue font-semibold'>web</span> and <span className='text-myNightBlue font-semibold'> mobile </span>. During the pandemic i was encouraged to get into IT and I'm excited to be able to work on something that I enjoy and can continue learning.
                        </p>
                        <p className='mb-8 font-medium text-2xl text-myDarkGray text-justify'>
                            I am currently <span className='text-myNightBlue font-semibold'> still studying </span>to improve my knowledge and be able to
                            give better logical solutions, about web and mobile development.
                        </p>
                        <p className='mb-8 font-medium text-2xl text-myDarkGray text-justify'>
                            I love <span className='text-myNightBlue font-semibold'> working in a team</span>, I believe that with a good organization you
                            can achieve very good results.
                        </p>
                        <p className='mb-8 font-medium text-2xl text-myDarkGray text-justify'>
                            I am looking for <span className='text-myNightBlue font-semibold'> new challenges </span> where I can bring my experience and
                            knowledge. I am looking for a position that will allow me to continue
                            learning and developing as a professional.
                        </p>
                        <p className='mb-8 font-medium text-2xl text-myDarkGray text-justify'>
                        <span className='text-myNightBlue font-semibold'>Self-taught </span> in constant learning, I like sports, cycling and getting together with friends.
                        </p>
                    </div>
                    {/* <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex flex-col justify-between'>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default About;
