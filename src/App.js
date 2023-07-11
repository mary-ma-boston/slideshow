
import React,  { useState } from 'react';
import SlidePage from './components/SlidePage';

import './App.css';

const SLIDES = [
  {
    title: "Today is workout plan",
    text: "We are gonna do 3 fundemental exercises.",
  },
  {
    title: "First, 10 push-ups",
    text: "Do 10 reps. Remember about full range of motion. Do not rush.",
  },
  {
    title: "Next, 20 squats",
    text: "Squats are important. Remember to keep your back straight.",
  },
  {
    title: "Finally, 15 sit-ups",
    text: "Slightly bend your knees. Remember about full range of motion",
  },
];

function App() {
  const [isLocated, setIsLocated] = useState(0);

  const restartHandler = () => {
    setIsLocated(0);
  };

  const prevHandler = () => {
    if(isLocated === 0) {
      return;
    }
    setIsLocated(prevState => prevState-1);
  };

  const nextHandler = () => {
    if(isLocated === SLIDES.length-1){
      return;
    }
    setIsLocated(prevState => prevState+1);
  }
 

  return (
      <div className='container'>
        <h1>SlideShow</h1>
        <div className='buttonCon'>
          <button onClick={restartHandler}>Restart</button>
          <button onClick={prevHandler}>Prev</button>
          <button onClick={nextHandler}>Next</button>
        </div>
        <SlidePage data={SLIDES[isLocated]}/>
      </div>
  );
}

export default App;
