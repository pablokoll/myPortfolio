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
            <div className='flex md:flex-row flex-col items-center min-h-screen'>
                <div className='container md:px-10 md:py-10 mx-auto flex flex-col sm:flex-nowrap flex-wrap '>
                    <h5 className='text-myBlue font-bold md:text-2xl text-lg mb-2 text-shadow bg-myButtonFill md:w-36 rounded-xl py-1 px-4 md:px-5 w-28 m-5 md:m-0'>HIRE ME</h5>
                    <h1 className='title-font lg:text-6xl sm:text-4xl text-4xl font-black text-myDarkGray relative mx-5 md:mx-0 md:my-2'>
                        CONTACT
                    </h1>
                    <div className='flex flex-col md:flex-row bg-white md:rounded-3xl rounded-t-3xl p-4 mt-4 w-full shadow-xl'>
                        <div className='flex flex-col md:flex-col md:pl-8 md:p-6 p-4 bg-myButtonFill md:w-1/3 h-44 md:h-full rounded-2xl md:overflow-hidden relative'>
                            <h3 className='text-myContactTitles font-bold md:text-3xl text-xl mb-2 md:mb-4'>
                                Contact Information
                            </h3>
                            <p className='text-myContactText font-medium md:text-lg md:mb-16 md:visible invisible h-0 w-0 md:h-full md:w-full'>
                                If you liked my work and you are interested contact me.
                            </p>
                            <div className='z-10'>
                            <div className='md:my-4 mb-1 z-10 '>
                                 <a
                                    href={getLinkWhatsApp()}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='flex gap-3 z-10 place-items-center'
                                >
                                <BsWhatsapp className=' text-myContactText z-10 hover:text-myTextBlue' />
                                <span className=' text-myContactText hover:text-myTextBlue text-sm md:text-base z.10'> +54 11 3431 1774</span>
                                </a>
                            </div>
                            <div className='flex gap-3 mb-1 md:my-4 place-items-center'>
                                <MdMailOutline className=' text-myContactText' />
                                <span className=' text-myContactText text-sm md:text-base'> pablokollm@gmail.com</span>
                            </div>
                            <div className='flex gap-3 md:my-4 place-items-center'>
                                <FaMapMarkerAlt className=' text-myContactText' />
                                <span className=' text-myContactText text-sm md:text-base'> Buenos Aires, Argentina</span>
                            </div>
                            </div>
                            <div className='flex self-end md:self-start gap-3 mt-4 md:mt-32 md:mr-10 z-20'>
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
                            <span className='bg-myDarkGray rounded-full w-52 h-52 self-end -bottom-10 -right-10 absolute z-10 invisible md:visible'></span>
                        </div>
                        <form
                            ref={form}
                            className='bg-white flex flex-col md:ml-auto w-full md:w-2/3 md:p-8 mt-8 md:mt-0 relative px-4 '
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className='flex flex-col md:flex-row gap-2 md:gap-10 mb-4'>
                                <div className='relative mb-4 flex flex-col w-full'>
                                    <label
                                        htmlFor='First_name'
                                        className='leading-7 text-md font-semibold text-myDarkGray'
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
                                        className='leading-7 font-semibold text-md text-myDarkGray'
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
                            <div className='flex flex-col md:flex-row gap-2 md:gap-10 mb-4'>
                                <div className='relative mb-4 flex flex-col w-full '>
                                    <label
                                        htmlFor='Email'
                                        className='leading-7 text-md font-semibold text-myDarkGray'
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
                                        className='leading-7 text-md font-semibold text-myDarkGray'
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
                            <h4 className='leading-7 text-md font-semibold text-myDarkGray mb-2'>
                                Why contact me?
                            </h4>
                            <div className='flex flex-wrap relative mb-4 md:mb-10 gap-3 md:gap-6 w-full'>
                                <div className='flex flex-row-reverse place-items-center'>
                                    <label className='leading-7 text-md font-semibold text-myDarkGrayLow'>
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
                                    <label className='leading-7 text-md font-semibold text-myDarkGrayLow'>
                                        Front-End
                                    </label>
                                    <input
                                        {...register('Service', { required: true })}
                                        type='radio'
                                        value='Frond-End'
                                        className='text-myTextBlue  mr-1 border-myGray border-2 focus:ring-0 focus:ring-transparent rounded-full cursor-pointer hover:bg-myTextBlue hover:bg-opacity-70'
                                    />
                                </div>
                                <div className='flex flex-row-reverse  place-items-center'>
                                    <label className='leading-7 text-md font-semibold text-myDarkGrayLow'>
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
                                    <label className='leading-7 text-md font-semibold text-myDarkGrayLow'>
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
                                <label className='leading-7 text-md font-semibold text-myDarkGray'>
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
                                    className='resize-none focus:ring-0 focus:border-myTextBlue border-b-2 border-myGray border-t-0 border-l-0 border-r-0 md:h-28 h-20'
                                />
                            </div>
                            <span className='absolute text-xl md:right-0 bottom-16 md:bottom-0 md:mr-5 text-red-800'>
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
                                className='self-center md:self-start font-semibold inline-flex text-myBlue bg-myButtonFill hover:bg-myTextBlue border-0 md:py-2 md:px-4 px-2 focus:outline-none rounded-full md:text-lg w-56 md:w-60 h-12 justify-center items-center cursor-pointer hover:text-myWhite shadow mt-10 md:mt-0'
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
