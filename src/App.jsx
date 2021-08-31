import './App.css';
import Header from './components/Header/Header';
import DiscountPopup from './components/OutsideContainer/DiscountPopup';
import Logo from './components/OutsideContainer/Logo';
import ProgramSection from './components/ProgramSection/ProgramSection';
import SuccessStories from './components/SuccessStories/SuccessStories';
import PositiveYogaList from './components/YogaPros/PositiveYogaList';
import YogaJourney from './components/YogaJourney/YogaJourney';
import Faq from './components/FAQ/Faq';

function App() {
  return (
    <>
      <div className='outside-container'>
        <DiscountPopup />
        <div>
          <Logo />
        </div>
      </div>
      <div className='container'>
        <Header />
        <ProgramSection />
        <SuccessStories />
        <PositiveYogaList />
        <YogaJourney />
        <Faq />
        <ProgramSection />
      </div>
    </>
  );
}

export default App;
