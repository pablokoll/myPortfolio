import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';
import { FaArrowUp } from 'react-icons/fa';

import { classNames } from '../utils/classNames'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-6 right-6 z-10'>
      <button
        type='button'
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0 cursor-default',
          'inline-flex items-center p-3 rounded-full shadow-sm text-white bg-myDarkGray ring-2 ring-myYellowLow transition-opacity hover:bg-myYellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-myYellowLow'
        )}
      >
        <BiArrowFromBottom className='h-6 w-6' aria-hidden='true' />
        {/* <FaArrowUp className='h-6 w-6' aria-hidden='true' /> */}
      </button>
    </div>
  );
};

export default ScrollToTop;