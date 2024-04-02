import { CardStyled, CardStyledRed, MindSection } from './MindMap.styled';
import sprite from '../../images/sprite.svg';

function MindMap() {
  return (
    <MindSection className="container">
      <h2 id="mindmap">Mind map</h2>
      <ul>
        <CardStyled>
          <p>
            All owners of APE NFTs and all future collections will receive a
            percentage of sales based on the number of NFTs they own
          </p>
          <h3>YAPE DROP</h3>
        </CardStyled>

        <CardStyled>
          <p>
            Launch of the 2nd YACHT Collection Releasing the first version of
            the Ape Slam Game
          </p>
          <h3>New Collection</h3>
        </CardStyled>

        <CardStyled>
          <p>
            Launch your own token, the proceeds of which will go to a global
            fund to LAUNCH YACHT CLUB AND PROMOTE it
          </p>
          <h3>Token</h3>
        </CardStyled>

        <CardStyledRed>
          <a href="#a" aria-label="link to learn more">
            <svg>
              <use href={`${sprite}#icon-up-left`} />
            </svg>
            <h3>
              Learn <br /> more <br />
              in mind map
            </h3>
          </a>
        </CardStyledRed>
      </ul>
    </MindSection>
  );
}

export default MindMap;
