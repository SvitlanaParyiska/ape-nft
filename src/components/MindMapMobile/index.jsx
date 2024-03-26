import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  ButtonBox,
  ButtonStyled,
  CardStyled,
  CardStyledRed,
  SectionStyled,
} from './MindMapMobile.styled';
import sprite from '../../images/sprite.svg';

function MindMapMobile() {
  return (
    <SectionStyled>
      <h2>Mind map</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1.5}
        centeredSlides={true}
        navigation={{
          nextEl: '#next_slide',
          prevEl: '#prev_slide',
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardStyled>
            <p>
              All owners of APE NFTs and all future collections will receive a
              percentage of sales based on the number of NFTs they own
            </p>
            <h3>YAPE DROP</h3>
          </CardStyled>
        </SwiperSlide>
        <SwiperSlide>
          <CardStyled>
            <p>
              Launch of the 2nd YACHT Collection Releasing the first version of
              the Ape Slam Game
            </p>
            <h3>New Collection</h3>
          </CardStyled>
        </SwiperSlide>
        <SwiperSlide>
          <CardStyled>
            <p>
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </p>
            <h3>Token</h3>
          </CardStyled>
        </SwiperSlide>
        <SwiperSlide>
          <CardStyledRed>
            <a href="#a" aria-label="link to learn more">
              <svg width={48} height={48}>
                <use href={`${sprite}#icon-up-left`} />
              </svg>
              <h3>
                Learn <br /> more <br />
                in mind map
              </h3>
            </a>
          </CardStyledRed>
        </SwiperSlide>
        <ButtonBox>
          <ButtonStyled id="prev_slide">Prev</ButtonStyled>
          <ButtonStyled id="next_slide">Next</ButtonStyled>
        </ButtonBox>
      </Swiper>
    </SectionStyled>
  );
}

export default MindMapMobile;
