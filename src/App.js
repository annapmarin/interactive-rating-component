import './App.css';
import iconStar from './img/icon-star.svg';
import React, { useState } from 'react';

function App() {

  const [ option, setOption ] = useState(0);

  return (
    <div className="App">
      <div className="star-container">
        <img src={iconStar} />
      </div>

      <div className="text-container">
        <h1>How did we do?</h1>
        <p>Please let us know how 
      we did with your support request. 
      All feedback is appreciated to help us 
      improve our offering!</p>
      </div>

      <div className="numbers-cont">
            <div className={option == 1 ? "number selected" : "number"} onclick={() => option == 1 ? setOption(0) : setOption(1)}>1</div>
            <div className={option == 2 ? "number selected" : "number"} onclick={() => option == 2 ? setOption(0) : setOption(2)}>2</div>
            <div className={option == 3 ? "number selected" : "number"} onclick={() => option == 3 ? setOption(0) : setOption(3)}>3</div>
            <div className={option == 4 ? "number selected" : "number"} onclick={() => option == 4 ? setOption(0) : setOption(4)}>4</div>
            <div className={option == 5 ? "number selected" : "number"} onclick={() => option == 5 ? setOption(0) : setOption(5)}>5</div>

        </div>
        <button>Submit</button>

      {/*
      You selected out of 5 Thank you! 
      We appreciate you taking the time to give 
      a rating. If you ever need more support, 
      don’t hesitate to get in touch! */}
    </div>
  );
}

export default App;