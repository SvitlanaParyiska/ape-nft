import { ContactUsSection, TextBox } from './ContactUs.styled';
import sprite from '../../images/sprite.svg';
import ContactForm from 'components/ContactForm';

function ContactUs() {
  return (
    <ContactUsSection className="container">
      <h2 id="mint">Are you in?</h2>
      <TextBox>
        <svg>
          <use href={`${sprite}#icon-x`}></use>
        </svg>
        <p>
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </p>
      </TextBox>
      <ContactForm />
    </ContactUsSection>
  );
}

export default ContactUs;
