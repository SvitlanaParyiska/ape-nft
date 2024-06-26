import { Toaster } from 'react-hot-toast';
import About from './About';
import Arts from './Arts';
import Faq from './Faq';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import MindMap from './MindMap';
import MindMapMobile from './MindMapMobile';
import MediaQuery from 'react-responsive';
import ContactUs from './ContactUs';
import RunString from './RunString';

function App() {
  return (
    <>
      <Toaster positions="top-right" toastOptions={{ duration: 1500 }} />
      <Header />
      <Hero />
      <About />
      <RunString />
      <MediaQuery maxWidth={768}>
        <MindMapMobile />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <MindMap />
      </MediaQuery>
      <Faq />
      <Arts />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
