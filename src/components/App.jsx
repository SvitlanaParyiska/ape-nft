import { Toaster } from 'react-hot-toast';
import About from './About';
import './App.styled.js';
import Arts from './Arts';
import Faq from './Faq';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import MindMap from './MindMap';

function App() {
  return (
    <>
      <Toaster positions="top-right" toastOptions={{ duration: 1500 }} />
      <Header />
      <Hero />
      <About />
      <MindMap />
      <Faq />
      <Arts />
      <Footer />
    </>
  );
}

export default App;
