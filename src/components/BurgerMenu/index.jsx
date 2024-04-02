import { useEffect, useState } from 'react';
import { BurgerListStyled } from './BurgerMenu.styled';

function BurgerMenu({ onToggleClick }) {
  const [isWhiteColor, setIsWhiteColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsWhiteColor(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <BurgerListStyled
      color={isWhiteColor ? '#fff' : '#1e1e1e'}
      $bgcolor={
        isWhiteColor ? 'rgba(255, 255, 255, 0.1)' : 'rgba(30, 30, 30, 0.1)'
      }
    >
      <li>
        <a aria-label="Link to shopping cart page" href="#about">
          ABOUT
        </a>
      </li>
      <li>
        <a aria-label="Link to favorites page" href="#mindmap">
          M-MAP
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
      <li onClick={() => onToggleClick()}>
        <button type="button">Close</button>
      </li>
    </BurgerListStyled>
  );
}

export default BurgerMenu;
