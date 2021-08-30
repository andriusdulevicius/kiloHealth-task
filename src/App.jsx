import './App.css';
import PlanSelection from './components/ProgramSection/PlanSelection';
import ProgramPerksList from './components/ProgramPerks/ProgramPerksList';

function App() {
  return (
    <div className='App'>
      <div className='d-flex'>
        <PlanSelection />
        <ProgramPerksList />
      </div>
    </div>
  );
}

export default App;
