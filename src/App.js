import './commonResource/css/styles.css';
import './commonResource/css/bootstrap/bootstrap.css';

import Header from './Components/Header/Header';
import FirstBanner from './Components/Main/Banners/FirstBanner';
import SecondBanner from './Components/Main/Banners/SecondBanner';
import ThirdBanner from './Components/Main/Banners/ThirdBanner';

import SectionOne from './Components/Main/Sections/SectionOne';
import SectionTwo from './Components/Main/Sections/SectionTwo';
import SectionThree from './Components/Main/Sections/SectionThree';

import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="">
      <Header />

      <FirstBanner />
      <SecondBanner />
      <ThirdBanner />

      <SectionOne />
      <SectionTwo />    
      <SectionThree />

      <Footer />

    </div>
  );
}

export default App;
