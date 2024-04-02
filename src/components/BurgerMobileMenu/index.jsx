import { useEffect } from 'react';
import {
  BoxIndexStyled,
  BoxMobileStyled,
  NavListStyled,
} from './BurgerMobileMenu.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

function BurgerMobileMenu({ onToggleClick }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onToggleClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onToggleClick]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return createPortal(
    <BoxMobileStyled>
      <BoxIndexStyled>
        <NavListStyled>
          <li onClick={() => onToggleClick()}>
            <a aria-label="Link to shopping cart page" href="#about">
              ABOUT
            </a>
          </li>
          <li onClick={() => onToggleClick()}>
            <a aria-label="Link to favorites page" href="#mindmap">
              MIND-MAP
            </a>
          </li>
          <li onClick={() => onToggleClick()}>
            <a aria-label="Link to history page" href="#faq">
              FAQ
            </a>
          </li>
          <li onClick={() => onToggleClick()}>
            <a aria-label="Link to history page" href="#arts">
              ARTS
            </a>
          </li>
          <li onClick={() => onToggleClick()}>
            <a aria-label="Link to history page" href="#mint">
              MINT
            </a>
          </li>
        </NavListStyled>
      </BoxIndexStyled>
      <p>© Yacht ape 2024 all rights reserved</p>
    </BoxMobileStyled>,
    modalRoot
  );
}

export default BurgerMobileMenu;
