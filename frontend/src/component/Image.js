import React from 'react';
import '../style/Image.css';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";


const Image = () => {
    return (
        <div className='Imagebox'>
            <div className='Imagecontainer'>
                <div className='imageitem1'> 이미지 1 </div>
                <div className='imageitem2'> 이미지 2 </div>
                <div className='imageitem3'> 이미지 3 </div>
            </div>
        </div>
    )
}

export default Image;