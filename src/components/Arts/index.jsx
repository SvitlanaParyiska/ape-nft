import { ArtsSection, StyledImage } from './Arts.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';
import slide4 from '../../images/slide4.jpg';
import slide5 from '../../images/slide5.jpg';
import slide6 from '../../images/slide6.jpg';
import slide7 from '../../images/slide7.jpg';

function Arts() {
  return (
    <ArtsSection>
      <h2>COLLECTION</h2>
      <Swiper
        className="swiper-box"
        spaceBetween={24}
        navigation={true}
        breakpoints={{
          360: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1280: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <StyledImage src={slide1} alt="slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={slide2} alt="slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={slide3} alt="slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={slide4} alt="slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={slide5} alt="slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={slide6} alt="slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={slide7} alt="slide 7" />
        </SwiperSlide>
      </Swiper>
    </ArtsSection>
  );
}

export default Arts;
