import classes from './App.module.css';
import { ReactComponent as Logo } from './static/icons/logo.svg'
import Header from './components/Header/Header';
import DiscountPopup from './components/OutsideContainer/DiscountPopup';
import ProgramSection from './components/ProgramSection/ProgramSection';
import SuccessStories from './components/SuccessStories/SuccessStories';
import Faq from './components/FAQ/Faq';
import YogaProsSection from './components/YogaProsSection/YogaProsSection';
import './Globalstyles.css'

function App() {
  return (
    <div className={classes.background}>
      <div className={classes['outside-container']}>
        <DiscountPopup />
        <div className={classes.logo}>
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
