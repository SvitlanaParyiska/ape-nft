import {
  ButtonStyled,
  ContainerBox,
  ContainerHero,
  ImageBox,
  ImageHero,
  SectionHero,
  TextHero,
  TitleStyled,
} from './Hero.styled';
import { heroImages } from '../../helpers/imagesHelper';

function Hero() {
  return (
    <ContainerHero>
      <SectionHero>
        <ContainerBox>
          <h1>diD yOu seE iT ?</h1>
          <h1>
            <span>YACHT APES</span>
          </h1>
          <TitleStyled>Apes aRe eveRywhere</TitleStyled>
          <ImageBox>
            <picture>
              <source
                srcSet={`${heroImages.desktop[0]} 1x,${heroImages.desktop[1]} 2x`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${heroImages.tablet[0]} 1x,${heroImages.tablet[1]} 2x`}
                media="(min-width: 768px)"
              />
              <source
                srcSet={`${heroImages.mobile[0]} 1x,${heroImages.mobile[1]} 2x`}
                media="(max-width: 767px)"
              />
              <ImageHero src={heroImages.mobile[0]} alt="Monkey" />
            </picture>
            <ButtonStyled>MEET APES</ButtonStyled>
          </ImageBox>
          <TextHero>
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </TextHero>
        </ContainerBox>
      </SectionHero>
    </ContainerHero>
  );
}

export default Hero;
