import React, { useEffect, useRef, useState } from 'react';
import '../style/Image.css';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },

};

const Image = () => {
  const images = [
    { id: 1, src: "/images/1.jpg", alt: "Image 1" },
    { id: 2, src: "/images/2.webp", alt: "Image 2" },
    { id: 3, src: "/images/3.jpg", alt: "Image 3"},
  ];

  // 현재 이미지 인덱스를 관리할 상태
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel 컴포넌트에 접근하기 위한 ref
  const carouselRef = useRef(null);

  // 다음 슬라이드로 이동하는 함수
  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % images.length;
    setCurrentSlide(nextIndex);
    // Carousel의 goToSlide 메서드를 사용하여 슬라이드 변경
    if (carouselRef.current) {
      carouselRef.current.goToSlide(nextIndex);
    }
  };

  // 일정 시간마다 자동으로 다음 슬라이드로 이동하는 효과
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5초마다 변경 (5000ms)

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 interval 제거
  }, [currentSlide]); // currentSlide 상태에 따라 useEffect가 다시 실행됨

  return (
    <div className='ImagePage'>
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        slidesToSlide={1} // 한 번에 한 장의 이미지씩 보이도록 설정
      >
        {images.map(image => (
          <div key={image.id} className='Imagebox'>
            <div className='Imagecontainer'>
              <img 
                src={image.src} 
                alt={image.alt} 
                style={{ width: '100%', height: '615px' }}
                />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Image;