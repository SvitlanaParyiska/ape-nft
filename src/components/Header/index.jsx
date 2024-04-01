import sprite from '../../images/sprite.svg';
import MediaQuery from 'react-responsive';
import {
  HeaderStyled,
  LinkHeaderStyled,
  LogoSvg,
  NavBox,
} from './Header.styled';
import BurgerMenu from 'components/BurgerMenu';
import { useEffect, useState } from 'react';
import BurgerMobileMenu from 'components/BurgerMobileMenu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhiteColor, setIsWhiteColor] = useState(false);
  const [notVisible, setNotVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsWhiteColor(window.scrollY > 0);
      setNotVisible(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
    setIsWhiteColor(prevState => !prevState);
  };

  return (
    <HeaderStyled>
      <MediaQuery maxWidth={767}>
        <a href="/ape-nft" aria-label="link to page">
          <LogoSvg
            color={isWhiteColor ? '#fff' : '#1e1e1e'}
            $visible={notVisible}
          >
            <use href={`${sprite}#icon-logo`} />
          </LogoSvg>
        </a>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <a href="/ape-nft" aria-label="link to page">
          <LogoSvg
            color={isWhiteColor ? '#fff' : '#1e1e1e'}
            $visible={notVisible}
          >
            <use href={`${sprite}#icon-logo`} />
          </LogoSvg>
        </a>
      </MediaQuery>
      <NavBox>
        <MediaQuery maxWidth={767}>
          <LinkHeaderStyled
            color={isWhiteColor ? '#fff' : '#1e1e1e'}
            href="#a"
            aria-label="link to menu"
            onClick={toggleMobileMenu}
          >
            MENU
          </LinkHeaderStyled>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          {isMobileMenuOpen && <BurgerMobileMenu onClick={toggleMobileMenu} />}
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <LinkHeaderStyled
            color={isWhiteColor ? '#fff' : '#1e1e1e'}
            href="#a"
            aria-label="link to menu"
            onClick={toggleMenu}
          >
            MENU
          </LinkHeaderStyled>
        </MediaQuery>
        <MediaQuery minWidth={768}>
          {isMenuOpen && <BurgerMenu onClick={toggleMobileMenu} />}
        </MediaQuery>
        <LinkHeaderStyled
          color={isWhiteColor ? '#fff' : '#1e1e1e'}
          href="#a"
          aria-label="link to Discord"
        >
          <svg>
            <use href={`${sprite}#icon-discord`}></use>
          </svg>
        </LinkHeaderStyled>
        <LinkHeaderStyled
          color={isWhiteColor ? '#fff' : '#1e1e1e'}
          href="#a"
          aria-label="link to Logomark"
        >
          <svg>
            <use href={`${sprite}#icon-Logomark`}></use>
          </svg>
        </LinkHeaderStyled>
        <LinkHeaderStyled
          color={isWhiteColor ? '#fff' : '#1e1e1e'}
          href="#a"
          aria-label="link to Twitter"
        >
          <svg>
            <use href={`${sprite}#icon-twitter`}></use>
          </svg>
        </LinkHeaderStyled>
      </NavBox>
    </HeaderStyled>
  );
}

export default Header;
