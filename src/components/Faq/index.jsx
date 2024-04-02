import { FaqSection } from './Faq.styled';

function Faq() {
  return (
    <FaqSection className="container">
      <h2 id="faq">FAQ</h2>
      <ul>
        <li>
          <h3>
            <span>[ 1 ]</span>WHAT IS AN NFT COLLECTION?
          </h3>
          <p>
            An NFT collection is a group of unique digital assets, each
            represented by a non-fungible token, typically created around a
            specific theme or style.
          </p>
        </li>
        <li>
          <h3>
            <span>[ 2 ]</span>HOW DO I PURCHASE NFTS FROM A COLLECTION?
          </h3>
          <p>
            To purchase nfts from a collection, you typically need to use
            cryptocurrency on a blockchain0based marketplace.
          </p>
        </li>
        <li>
          <h3>
            <span>[ 3 ]</span> CAN I SELL OR TRADE NFTS FROM A COLLECTION?
          </h3>
          <p>
            Yes, you can sell or trade NFTs from a collection like you would
            other digital assets.
          </p>
        </li>
        <li>
          <h3>
            <span>[ 4 ]</span>WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?
          </h3>
          <p>
            As an NFT owner, you can own, transfer, potentially access exclusive
            content, resell, but don't automatically get copyright or
            intellectual property rights.
          </p>
        </li>
      </ul>
    </FaqSection>
  );
}

export default Faq;
