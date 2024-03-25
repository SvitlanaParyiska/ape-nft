import { AboutUsImg, SectionAbout, TextBox } from './About.styled';
import sprite from '../../images/sprite.svg';
import { aboutUsImages } from '../../helpers/imagesHelper';

function About() {
  return (
    <SectionAbout className="container">
      <h2>
        a story that started with
        <span>
          {' '}
          one simple <br />
          ape
        </span>
      </h2>
      <p>
        WHO GOT <br /> FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW
        THE IDEA OF ESCAPING AND DYNAMIC JOURNEY ON THE YACHT
      </p>
      <TextBox>
        <svg width={24} height={24}>
          <use href={`${sprite}#icon-x`}></use>
        </svg>
        <p>
          EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS ARE
          RANDOMLY GENERATED BY USERS
        </p>
      </TextBox>
      <picture>
        <source
          srcSet={`${aboutUsImages.desktop[0]} 1x,${aboutUsImages.desktop[1]} 2x`}
          media="(min-width: 1280px)"
        />
        <source
          srcSet={`${aboutUsImages.tablet[0]} 1x,${aboutUsImages.tablet[1]} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${aboutUsImages.mobile[0]} 1x,${aboutUsImages.mobile[1]} 2x`}
          media="(max-width: 767px)"
        />
        <AboutUsImg src={aboutUsImages.mobile[0]} alt="Monkey" />
      </picture>
    </SectionAbout>
  );
}

export default About;