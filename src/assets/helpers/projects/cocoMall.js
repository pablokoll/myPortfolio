import React from 'react';
// import cocoMallLanding from '../../img/coco-mall/coco-mall landingpng.png'
// import cocoMallHome from '../../img/coco-mall/coco-mall home.png'
// import cocoMallDetail from '../../img/coco-mall/coco-mall detail.png'
// import cocoMallCart from '../../img/coco-mall/coco-mall cart.png'

function CocoMall() {
    return (
        <div className='flex flex-grow flex-col h-screen'>
            <div className='flex flex-col container px-5 py-5 mx-auto items-center bg-white w-2/3 h-full'>
                <div className='flex items-center gap-5'>
                <h2 className='title-font lg:text-5xl sm:text-4xl text-3xl mb-4 font-extrabold text-myDarkGray relative'>
                    COCO mall
                </h2>
                <span className='text-myYellow font-bold'>
                    Marketplace
                </span>
                </div>
                <div className='flex w-2/3 relative justify-center'>
                    <iframe
                        className='rounded-2xl'
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
                            <h4 className='text-myDarkGray font-bold text-3xl mb-2'>
                                Technologies
                            </h4>
                            <div className='flex justify-between items-center'>
                                <ul className='flex flex-col text-myDarkGray'>
                                    <li className='text-myNightBlue font-semibold text-lg'>
                                        Front-end
                                    </li>
                                    <li className=''>React</li>
                                    <li className=''>Redux</li>
                                    <li className=''>Tailwind</li>
                                    <li className='invisible'>Otro</li>
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
                                    <li className='invisible'>Otro</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col mt-4'>
                            <h4 className='text-myDarkGray font-bold text-3xl mb-4'>Description</h4>
                            <p className='text-justify'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                                natus provident molestiae delectus itaque non, sapiente sed?
                                Possimus sed corrupti quae illo, porro suscipit quis ut laborum non
                                maiores aspernatur.
                            </p>
                            <h4 className='text-myDarkGray font-bold text-3xl mb-4 mt-4'>
                                Experience
                            </h4>
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime consectetur a, voluptatibus tempora dolorem doloribus reprehenderit amet iste! Eius, ullam nihil? Harum, voluptate! Totam laborum tempora sit enim perspiciatis?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CocoMall;
