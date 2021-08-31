import classes from './App.module.css';
import Header from './components/Header/Header';
import DiscountPopup from './components/OutsideContainer/DiscountPopup';
import Logo from './components/OutsideContainer/Logo';
import ProgramSection from './components/ProgramSection/ProgramSection';
import SuccessStories from './components/SuccessStories/SuccessStories';
import Faq from './components/FAQ/Faq';
import YogaProsSection from './components/YogaProsSection/YogaProsSection';

function App() {
  return (
    <div className={classes.background}>
      <div className={classes['outside-container']}>
        <DiscountPopup />
        <div>
          <Logo />
        </div>
      </div>
      <div className={classes.container}>
        <Header />
        <ProgramSection />
        <SuccessStories />
        <YogaProsSection />
        <Faq />
        <ProgramSection />
      </div>
    </div>
  );
}

export default App;
