import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';



const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <BsChevronRight />,
  prevArrow: <BsChevronLeft />,
  appendDots: (dots: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => (
    <div
      style={{
        position: 'absolute',
        bottom: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ul style={{ margin: '0' }}> {dots} </ul>
    </div>
  ),
  customPaging: () => (
    <div
      style={{
        width: '30px',
        height: '10px',
        borderRadius: '5px',
        backgroundColor: '#c4c4c4',
      }}
    ></div>
  ),
}

const Tour = () => {
  return (
    
    <div id='tour'>
      <Slider {...settings}>
      {/* <img src={lalibela} className='' alt="" />
      <img src={axum} alt="" />
      <img src={gonder} alt="" />
      <img src={abay} alt="" />
      <img src={abay} alt="" /> */}
    </Slider>
     </div>
  )
}

export default Tour