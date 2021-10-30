import React from 'react';

function ReadingProgress ({ target }) {
    const [readingProgress, setReadingProgress] = React.useState(0);
    const scrollListener = () => {
      if (!target.current) {
        return;
      }
  
      const element         = target.current;
      const totalHeight     = element.clientHeight - element.offsetTop - (window.innerHeight);
      const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
      if (windowScrollTop === 0) {
        return setReadingProgress(0);
      }
  
      if (windowScrollTop > totalHeight) {
        return setReadingProgress(100);
      }
     
      setReadingProgress((windowScrollTop / totalHeight) * 100);
    };
    
    React.useEffect(() => {
      window.addEventListener("scroll", scrollListener);
      return () => window.removeEventListener("scroll", scrollListener);
    });
  
    return <div className='fixed h-2 top-0 bg-myYellow z-20' style={{width: `${readingProgress}%`}} />;
  };

  export default ReadingProgress
