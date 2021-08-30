import './App.css';
import PlanSelection from './components/ProgramSection/PlanSelection';
import ProgramPerksList from './components/ProgramPerks/ProgramPerksList';
import SuccessStories from './components/SuccessStories/SuccessStories';

function App() {
  return (
    <div className='App'>
      <div className='d-flex'>
        <PlanSelection />
        <ProgramPerksList />
      </div>
      <SuccessStories />
    </div>
  );
}

export default App;
