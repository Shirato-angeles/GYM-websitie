import Hero from './components/Hero/Hero';
import Programs from './components/Programas/Programs'
import './App.css';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/plans'

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
    </div>
  );
}

export default App;
