import {
  FaqBox,
  FaqSection,
  StyledImage,
  TextQaqStyled,
  TitleFaqStyled,
} from './Faq.styled';
import image1 from '../../images/Mask1.jpg';
import image2 from '../../images/Mask2.jpg';
import image3 from '../../images/Mask3.jpg';
import image4 from '../../images/Mask4.jpg';

function Faq() {
  return (
    <FaqSection className="container">
      <h2 id="faq">FAQ</h2>
      <ul>
        <li>
          <StyledImage src={image1} alt="monkey 1" />
          <FaqBox>
            <span>[ 1 ]</span>
            <div>
              <TitleFaqStyled>
                WHAT IS AN NFT
                <br />
                COLLECTION?
              </TitleFaqStyled>
              <TextQaqStyled>
                An NFT collection is a group of unique digital assets, each
                represented by a non-fungible token, typically created around a
                specific theme or style.
              </TextQaqStyled>
            </div>
          </FaqBox>
        </li>
        <li>
          <StyledImage src={image2} alt="monkey 2" />
          <FaqBox>
            <span>[ 2 ]</span>
            <div>
              <TitleFaqStyled>
                HOW DO I PURCHASE NFTS
                <br />
                FROM A COLLECTION?
              </TitleFaqStyled>
              <TextQaqStyled>
                To purchase nfts from a collection, you typically need to use
                cryptocurrency on a blockchain0based marketplace.
              </TextQaqStyled>
            </div>
          </FaqBox>
        </li>
        <li>
          <StyledImage src={image3} alt="monkey 3" />
          <FaqBox>
            <span>[ 3 ]</span>
            <div>
              <TitleFaqStyled>
                CAN I SELL OR TRADE NFTS
                <br />
                FROM A COLLECTION?
              </TitleFaqStyled>
              <TextQaqStyled>
                Yes, you can sell or trade NFTs from a collection like you would
                other digital assets.
              </TextQaqStyled>
            </div>
          </FaqBox>
        </li>
        <li>
          <StyledImage src={image4} alt="monkey 4" />
          <FaqBox>
            <span>[ 4 ]</span>
            <div>
              <TitleFaqStyled>
                WHAT RIGHTS DO I HAVE AS
                <br />
                AN OWNER OF AN NFT?
              </TitleFaqStyled>
              <TextQaqStyled>
                As an NFT owner, you can own, transfer, potentially access
                exclusive content, resell, but don't automatically get copyright
                or intellectual property rights.
              </TextQaqStyled>
            </div>
          </FaqBox>
        </li>
      </ul>
    </FaqSection>
  );
}

export default Faq;
