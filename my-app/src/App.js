import Hero from './components/Hero/Hero';
import Programs from './components/Programas/Programs'
import './App.css';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/plans'
import Testimonial from './components/Testimonials/Testimonial';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonial/>
    </div>
  );
}

export default App;
