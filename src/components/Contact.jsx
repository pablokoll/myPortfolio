import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
                <div className='container px-5 py-10 mx-auto flex flex-col sm:flex-nowrap flex-wrap '>
                    <h5 className='text-myYellow font-semibold text-2xl mb-2 ml-2 text-shadow'>HIRE ME</h5>
                    <h1 className='title-font lg:text-7xl sm:text-4xl text-3xl font-extrabold text-myDarkGray relative'>
                        CONTACT
                    </h1>
                    <div className='flex bg-white rounded-3xl p-4 mt-4 w-full shadow-xl'>
                        <div className='flex flex-col pl-8 p-6 bg-myYellow w-1/3  rounded-2xl overflow-hidden relative'>
                            <h3 className='text-myWhite font-bold text-3xl mb-4'>
                                Contact Information
                            </h3>
                            <p className='text-myWhite font-medium text-lg mb-16'>
                                If you liked my work and you are interested in learning more, please
                                do not hesitate to contact me.
                            </p>
                            <div className=' text-myDarkGray hover:text-myNightBlue'>
                                 <a
                                    href={getLinkWhatsApp()}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='flex gap-3 my-4 place-items-center w-1/2'
                                >
                                <BsWhatsapp className=' text-myDarkGray hover:text-myNightBlue' />
                                <span className=' text-myDarkGray hover:text-myNightBlue'> +54 11 3431 1774</span>
                                </a>
                            </div>
                            <div className='flex gap-3 my-4  place-items-center'>
                                <MdMailOutline className=' text-myDarkGray' />
                                <span className=' text-myDarkGray'> pablokollm@gmail.com</span>
                            </div>
                            <div className='flex gap-3 my-4  place-items-center'>
                                <FaMapMarkerAlt className=' text-myDarkGray' />
                                <span className=' text-myDarkGray'> Buenos Aires, Argentina</span>
                            </div>
                            <div className='flex gap-3 mt-32 mr-10  z-20'>
                                <a
                                    href='https://www.linkedin.com/in/pablo-koll/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='hover:bg-myYellowLow hover:text-myYellow p-2 rounded-full'
                                >
                                    <FaLinkedinIn className='text-myWhite hover:text-myYellow text-2xl ' />
                                </a>
                                <a
                                    href='https://github.com/PabloK09'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='hover:bg-myYellowLow hover:text-myYellow p-2 rounded-full'
                                >
                                    <FaGithub className='text-myWhite hover:text-myYellow text-2xl' />
                                </a>
                            </div>
                            <span className='bg-myDarkGray rounded-full w-52 h-52 self-end -bottom-10 -right-10 absolute z-10'></span>
                        </div>
                        <form
                            ref={form}
                            className='bg-white flex flex-col md:ml-auto w-2/3 md:p-8 mt-8 md:mt-0 relative'
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className='flex gap-10 mb-4'>
                                <div className='relative mb-4 flex flex-col w-full border-b-2'>
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
                                        className='rounded border-none text-base text-myDarkGray py-1 px-1 leading-8 focus:ring-0 focus:border-black'
                                    />
                                </div>
                                <div className='relative mb-4 flex flex-col w-full border-b-2'>
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
                                        className='rounded border-none text-base text-myDarkGray py-1 px-1 leading-8 focus:ring-0 focus:border-black'
                                    />
                                </div>
                            </div>
                            <div className='flex gap-10 mb-4'>
                                <div className='relative mb-4 flex flex-col w-full border-b-2'>
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
                                        className='rounded border-none text-base text-myDarkGray py-1 px-1 leading-8 focus:ring-0 focus:border-black'
                                    />
                                </div>

                                <div className='relative mb-4 flex flex-col w-full border-b-2'>
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
                                        className='rounded border-none text-base text-myDarkGray py-1 px-1 leading-8 focus:ring-0 focus:border-black'
                                    />
                                </div>
                            </div>
                            <h4 className='leading-7 text-md font-semibold text-myDarkGray mb-2'>
                                Why contact me?
                            </h4>
                            <div className='flex relative mb-10 gap-6 w-full'>
                                <div className='flex flex-row-reverse  place-items-center'>
                                    <label className='leading-7 text-md font-semibold text-myDarkGrayLow'>
                                        Full-Stack
                                    </label>
                                    <input
                                        {...register('Service', { required: true })}
                                        type='radio'
                                        value='Full-Stack'
                                        className='text-myNightBlue mr-1 border-myGray border-2 focus:ring-0 focus:ring-transparent rounded-full cursor-pointer'
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
                                        className='text-myNightBlue  mr-1 border-myGray border-2 focus:ring-0 focus:ring-transparent rounded-full cursor-pointer'
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
                                        className='text-myNightBlue mr-1 border-myGray focus:ring-0 focus:ring-transparent border-2 rounded-full cursor-pointer'
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
                                        className='text-myNightBlue mr-1 focus:ring-0 focus:ring-transparent border-myGray border-2 rounded-full cursor-pointer'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col relative mb-4 border-b-2'>
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
                                    className='resize-none focus:ring-0 border-none h-28'
                                />
                            </div>
                            <span className='text-xl absolute left-0 bottom-0 pl-8 pb-20 text-red-800'>
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
                                className='hover:text-myDarkGray hover:bg-myYellowLow mt-10 self-end w-2/5 h-14 text-myWhite bg-myYellow border-0 py-2 px-6 focus:outline-none rounded-xl text-lg'
                            >
                                Send Message
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
