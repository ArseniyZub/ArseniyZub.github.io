import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const images = [
  'https://picsum.photos/seed/1/800/400',
  'https://picsum.photos/seed/2/800/400',
  'https://picsum.photos/seed/3/800/400',
  'https://picsum.photos/seed/4/800/400',
  'https://picsum.photos/seed/5/800/400',
  'https://picsum.photos/seed/6/800/400',
  'https://picsum.photos/seed/7/800/400',
  'https://picsum.photos/seed/8/800/400',
];

function App() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div style={{ width: '90%', maxWidth: 1000, margin: '50px auto', position: 'relative' }}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, i) => (
          <div key={i}>
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '10px',
                padding: '0 10px',
              }}
            />
          </div>
        ))}
      </Slider>


      <Button
        shape="circle"
        size="large"
        icon={<LeftOutlined style={{ fontSize: 28 }} />}
        onClick={() => sliderRef.current.slickPrev()}
        style={{
          position: 'absolute',
          top: '50%',
          left: '-35px',
          transform: 'translateY(-50%)',
          zIndex: 2,
          background: 'rgba(255, 255, 255, 0.7)',
        }}
      />
      <Button
        shape="circle"
        size="large"
        icon={<RightOutlined style={{ fontSize: 28 }} />}
        onClick={() => sliderRef.current.slickNext()}
        style={{
          position: 'absolute',
          top: '50%',
          right: '-35px',
          transform: 'translateY(-50%)',
          zIndex: 2,
          background: 'rgba(255, 255, 255, 0.7)',
        }}
      />
    </div>
  );
}

export default App;