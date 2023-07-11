
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
  const [prevDisable, setPreDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);

  const restartHandler = () => {
    setIsLocated(0);
    setNextDisable(false);
    setPreDisable(false);
  };

  const prevHandler = () => {
    if(isLocated === 0) {
      setPreDisable(true);
      return
    }
    setIsLocated(prevState => prevState-1);
    setPreDisable(false);
    setNextDisable(false);
  };

  const nextHandler = () => {
    if(isLocated === SLIDES.length-1){
      setNextDisable(true);
      return
    }
    setIsLocated(prevState => prevState+1);
    setNextDisable(false);
    setPreDisable(false);
  }
 

  return (
      <div className='container'>
        <h1>SlideShow</h1>
        <div className='buttonCon'>
          <button onClick={restartHandler}>Restart</button>
          <button onClick={prevHandler} disabled={prevDisable}>Prev</button>
          <button onClick={nextHandler} disabled={nextDisable}>Next</button>
        </div>
        <SlidePage data={SLIDES[isLocated]}/>
      </div>
  );
}

export default App;
