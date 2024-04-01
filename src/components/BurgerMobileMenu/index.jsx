import { useEffect } from 'react';
import { BoxMobileStyled, NavListStyled } from './BurgerMobileMenu.styled';

function BurgerMobileMenu({ onClick }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  //   const handleCloseClick = () => {
  //     onClick();
  //   };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <BoxMobileStyled>
      {/* <a href="/ape-nft" aria-label="link to page">
        <LogoSvg>
          <use href={`${sprite}#icon-logo`} />
        </LogoSvg>
      </a> */}

      <NavListStyled>
        {/* <li>
            <ButtonClose
              type="button"
              aria-label="Close menu"
              onClick={handleCloseClick}
            >
              Close
            </ButtonClose>
          </li> */}
        <li>
          <a aria-label="Link to shopping cart page" href="#about">
            ABOUT
          </a>
        </li>
        <li>
          <a aria-label="Link to favorites page" href="#mindmap">
            MIND-MAP
          </a>
        </li>
        <li>
          <a aria-label="Link to history page" href="#faq">
            FAQ
          </a>
        </li>
        <li>
          <a aria-label="Link to history page" href="#arts">
            ARTS
          </a>
        </li>
        <li>
          <a aria-label="Link to history page" href="#mint">
            MINT
          </a>
        </li>
      </NavListStyled>
    </BoxMobileStyled>
  );
}

export default BurgerMobileMenu;
