import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { BsWhatsapp } from 'react-icons/bs';
import { MdMailOutline } from 'react-icons/md';
import { FaMapMarkerAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        defaultValues: {
            Service: 'Full-Stack',
        },
    });
    
    const form = useRef();
    init('user_gjDPKwXa1RXGjtVbzWi6h');
    const onSubmit = (e) => {
        emailjs
            .sendForm(
                'service_zigak7r',
                'template_8mazso1',
                form.current,
                'user_gjDPKwXa1RXGjtVbzWi6h',
            )
            .then(
                (result) => {
                    console.log(result);
                    console.log(result.text);
                    toast.success('We are in contact!', {
                        position: 'top-center',
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    });
                    setValue('First_name', '');
                    setValue('Last_name', '');
                    setValue('Email', '');
                    setValue('Mobile_number', '');
                    setValue('Service', 'Full-Stack');
                    setValue('Message', '');
                },
                (error) => {
                    console.log(error.text);
                },
            );
    };

    const getLinkWhatsApp = () => {
        let myNumber = 1134311774;
        let myMessage = 'Hi, I would like to know more about your work!'
        let myLink = `https://api.whatsapp.com/send?phone=${myNumber}&text=`+encodeURIComponent(myMessage);
        return myLink;
    }

    return (
        <section id='contact' className='relative'>
            <div className='flex xl:flex-row flex-col items-center min-h-screen'>
                <div className='container sm:px-10 pt-10 mx-auto flex flex-col xl:flex-nowrap flex-wrap '>
                    <h5 className='text-myBlue font-bold xl:text-2xl md:text-lg mb-2 text-shadow bg-myButtonFill xl:w-36 rounded-xl py-1 px-3 xl:px-5 sm:w-28 w-24 xl:mb-4 mx-5 sm:mx-0'>HIRE ME</h5>
                    <h1 className='xl:text-6xl md:text-5xl sm:text-4xl text-2xl font-black text-myDarkGray relative w-full xl:mx-0 xl:my-2 mx-5 sm:mx-0'>
                        CONTACT
                    </h1>
                    <div className='flex flex-col xl:flex-row bg-white xl:rounded-3xl rounded-t-3xl p-4 mt-4 w-full shadow-xl'>
                        <div className='flex flex-col xl:flex-col xl:pl-8 xl:p-6 p-4 bg-myButtonFill xl:w-1/3 h-44 xl:h-full rounded-2xl xl:overflow-hidden relative'>
                            <h3 className='text-myContactTitles font-bold xl:text-3xl text-lg mb-2 xl:mb-4'>
                                Contact Information
                            </h3>
                            <p className='text-myContactText font-medium xl:text-xl xl:mb-16 xl:visible invisible h-0 w-0 xl:h-full xl:w-full'>
                                If you liked my work and you are interested contact me.
                            </p>
                            <div className='z-10'>
                            <div className='xl:my-4 mb-1 z-10 '>
                                 <a
                                    href={getLinkWhatsApp()}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='group flex gap-3 z-10 place-items-center'
                                >
                                <BsWhatsapp className=' text-myContactText z-10 group-hover:text-myTextBlue' />
                                <span className=' text-myContactText group-hover:text-myTextBlue text-sm xl:text-base z.10'> +54 11 3431 1774</span>
                                </a>
                            </div>
                            <div className='flex gap-3 mb-1 xl:my-4 place-items-center'>
                                <MdMailOutline className=' text-myContactText' />
                                <span className=' text-myContactText text-sm xl:text-base'> pablokollm@gmail.com</span>
                            </div>
                            <div className='flex gap-3 xl:my-4 place-items-center'>
                                <FaMapMarkerAlt className=' text-myContactText' />
                                <span className=' text-myContactText text-sm xl:text-base'> Buenos Aires, Argentina</span>
                            </div>
                            </div>
                            <div className='flex self-end xl:self-start gap-3 mt-4 xl:mt-32 xl:mr-10 z-20'>
                                <a
                                    href='https://www.linkedin.com/in/pablo-koll/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='group hover:bg-myContactText hover:text-myButtonFill p-2 rounded-full'
                                >
                                    <FaLinkedinIn className='text-myContactText group-hover:text-myButtonFill text-2xl ' />
                                </a>
                                <a
                                    href='https://github.com/PabloK09'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='group hover:bg-myContactText hover:text-myButtonFill p-2 rounded-full'
                                >
                                    <FaGithub className='text-myContactText group-hover:text-myButtonFill text-2xl' />
                                </a>
                            </div>
                            <span className='bg-myDarkGray rounded-full w-52 h-52 self-end -bottom-10 -right-10 absolute z-10 invisible xl:visible'></span>
                        </div>
                        <form
                            ref={form}
                            className='bg-white flex flex-col xl:ml-auto w-full xl:w-2/3 xl:p-8 mt-8 xl:mt-0 relative px-4 '
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className='flex flex-col xl:flex-row gap-2 xl:gap-10 mb-4'>
                                <div className='relative mb-4 flex flex-col w-full'>
                                    <label
                                        htmlFor='First_name'
                                        className='leading-7 text-xl font-semibold text-myDarkGray'
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Pablo'
                                        {...register('First_name', {
                                            required: {
                                                value: true,
                                                message: 'Please enter a valid first name',
                                            },
                                            maxLength: 30,
                                            pattern: '//^[^\\/&]*$//i})}',
                                        })}
                                        className='focus:border-myTextBlue border-b-2 border-myGray border-t-0 border-l-0 border-r-0 rounded  text-base text-myDarkGray py-1 px-1 leading-8 focus:ring-0'
                                    />
                                </div>
                                <div className='relative mb-4 flex flex-col w-full'>
                                    <label
                                        htmlFor='Last_name'
                                        className='leading-7 font-semibold text-xl text-myDarkGray'
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Koll'
                                        {...register('Last_name', {
                                            required: {
                                                value: true,
                                                message: 'Please enter a valid last name',
                                            },
                                            maxLength: 40,
                                            pattern: '//^[^\\/&]*$//i})}',
                                        })}
                                        className='rounded focus:border-myTextBlue border-b-2 border-myGray border-t-0 border-l-0 border-r-0 text-base text-myDarkGray py-1 px-1 leading-8 focus:ring-0'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col xl:flex-row gap-2 xl:gap-10 mb-4'>
                                <div className='relative mb-4 flex flex-col w-full '>
                                    <label
                                        htmlFor='Email'
                                        className='leading-7 text-xl font-semibold text-myDarkGray'
                                    >
                                        Mail
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='example@mail.com'
                                        {...register('Email', {
                                            required: {
                                                value: true,
                                                message: 'Please enter a email address',
                                            },
                                            pattern: /^\S+@\S+$/i,
                                        })}
                                        className='rounded text-base text-myDarkGray py-1 px-1 leading-8 focus:ring-0 focus:border-myTextBlue border-b-2 border-myGray border-t-0 border-l-0 border-r-0'
                                    />
                                </div>
                                <div className='relative mb-4 flex flex-col w-full '>
                                    <label
                                        htmlFor='Mobile_number'
                                        className='leading-7 text-xl font-semibold text-myDarkGray'
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type='tel'
                                        placeholder='1134311774'
                                        {...register('Mobile_number', {
                                            required: {
                                                value: true,
                                                message: 'Please enter a valid phone',
                                            },
                                            maxLength: 12,
                                            pattern:
                                                '//^(?([0-9]{3}))?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$//i})}',
                                        })}
                                        className='rounded text-base text-myDarkGray py-1 px-1 leading-8 focus:ring-0 focus:border-myTextBlue border-b-2 border-myGray border-t-0 border-l-0 border-r-0'
                                    />
                                </div>
                            </div>
                            <h4 className='leading-7 text-xl font-semibold text-myDarkGray mb-2'>
                                Why contact me?
                            </h4>
                            <div className='flex flex-wrap relative mb-4 xl:mb-10 gap-3 xl:gap-6 w-full'>
                                <div className='flex flex-row-reverse place-items-center'>
                                    <label
                                    htmlFor='Full-Stack'
                                    className='leading-7 text-xl font-semibold text-myDarkGrayLow'>
                                        Full-Stack
                                    </label>
                                    <input
                                        {...register('Service', { required: true })}
                                        type='radio'
                                        value='Full-Stack'
                                        className='text-myTextBlue mr-1 border-myGray border-2 focus:ring-0 focus:ring-transparent rounded-full cursor-pointer hover:bg-myTextBlue hover:bg-opacity-70'
                                    />
                                </div>
                                <div className='flex flex-row-reverse  place-items-center'>
                                    <label
                                    htmlFor='Front-End'
                                    className='leading-7 text-xl font-semibold text-myDarkGrayLow'>
                                        Front-End
                                    </label>
                                    <input
                                        {...register('Service', { required: true })}
                                        type='radio'
                                        value='Front-End'
                                        className='text-myTextBlue  mr-1 border-myGray border-2 focus:ring-0 focus:ring-transparent rounded-full cursor-pointer hover:bg-myTextBlue hover:bg-opacity-70'
                                    />
                                </div>
                                <div className='flex flex-row-reverse  place-items-center'>
                                    <label
                                    htmlFor='Back-End'
                                    className='leading-7 text-xl font-semibold text-myDarkGrayLow'>
                                        Back-End
                                    </label>
                                    <input
                                        {...register('Service', { required: true })}
                                        type='radio'
                                        value='Back-End'
                                        className='text-myTextBlue mr-1 border-myGray focus:ring-0 focus:ring-transparent border-2 rounded-full cursor-pointer hover:bg-myTextBlue hover:bg-opacity-70'
                                    />
                                </div>
                                <div className='flex flex-row-reverse  place-items-center'>
                                    <label
                                    htmlFor='Other'
                                    className='leading-7 text-xl font-semibold text-myDarkGrayLow'>
                                        Other
                                    </label>
                                    <input
                                        {...register('Service', { required: true })}
                                        type='radio'
                                        value='Other'
                                        className='text-myTextBlue mr-1 focus:ring-0 focus:ring-transparent border-myGray border-2 rounded-full cursor-pointer hover:bg-myTextBlue hover:bg-opacity-70'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col relative mb-4 '>
                                <label
                                htmlFor='Message'
                                className='leading-7 text-xl font-semibold text-myDarkGray'>
                                    Message
                                </label>
                                <textarea
                                    {...register('Message', {
                                        required: {
                                            value: true,
                                            message: 'Please enter a valid message',
                                        },
                                    })}
                                    placeholder='Write your message...'
                                    className='resize-none focus:ring-0 focus:border-myTextBlue border-b-2 border-myGray border-t-0 border-l-0 border-r-0 xl:h-28 h-20'
                                />
                            </div>
                            <span className='absolute text-lg xl:right-0 bottom-16 xl:bottom-0 xl:mr-5 text-red-800'>
                                {errors.First_name?.message?.length ||
                                errors.Last_name?.message?.length ||
                                errors.Email?.message?.length ||
                                errors.Mobile_number?.message?.length ||
                                errors.Message?.message?.length
                                    ? 'Please complete the fields'
                                    : false}
                            </span>
                            <button
                                type='submit'
                                value='Send'
                                className='self-center xl:self-start font-semibold inline-flex text-myBlue bg-myButtonFill hover:bg-myTextBlue border-0 lg:py-2 lg:px-4 px-2 focus:outline-none rounded-full lg:text-xl w-56 xl:w-60 h-12 justify-center items-center cursor-pointer hover:text-myWhite shadow mt-10 xl:mt-5'
                            >
                                Submit
                            </button>
                        </form>
                        <ToastContainer
                            position='top-center'
                            autoClose={1000}
                            hideProgressBar
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss={false}
                            draggable={false}
                            pauseOnHover
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
