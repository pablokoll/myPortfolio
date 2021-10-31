import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import BffGallery from '../assets/helpers/projects/bffGallery';
import CocoMall from '../assets/helpers/projects/cocoMall';


function Project() {
    const location = useLocation();
    return (
        <div className=''>
            
            {location.pathname === '/project/BFF-Gallery' ? <BffGallery /> : false}
            {location.pathname === '/project/COCO mall' ? <CocoMall /> : false}
        </div>
    );
}

export default Project;
