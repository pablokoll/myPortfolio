import React from 'react';
import ReadingProgress from '../components/ReadingProgress';
import ScrollToTop from '../components/ScrollToTop';
import Presentation from '../components/Presentation';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function Home() {
    const target = React.createRef();

    return (
        <>
        <ReadingProgress target={target} />
        <div className='bg-myBackground' ref={target}>
            <ScrollToTop />
            <Presentation />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
        </>
    );
}

export default Home;
