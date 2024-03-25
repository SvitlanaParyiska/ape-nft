import sprite from '../../images/sprite.svg';
import { HeaderStyled, LogoSvg, NavBox } from './Header.styled';
// import BurgerMenu from 'components/BurgerMenu';

function Header() {
  return (
    <HeaderStyled>
      <a href="/ape-nft" aria-label="link to page">
        <LogoSvg>
          <use href={`${sprite}#icon-logo`} />
        </LogoSvg>
      </a>
      <NavBox>
        <a href="#a" aria-label="link to menu">
          MENU
        </a>
        <a href="#a" aria-label="link to Discord">
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-discord`}></use>
          </svg>
        </a>
        <a href="#a" aria-label="link to Logomark">
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-Logomark`}></use>
          </svg>
        </a>
        <a href="#a" aria-label="link to Twitter">
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-twitter`}></use>
          </svg>
        </a>
      </NavBox>
    </HeaderStyled>
  );
}

export default Header;
