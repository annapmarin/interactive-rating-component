import React, { useState } from 'react';
import iconStar from '../img/icon-star.svg';
import "../stylesheets/card.css"
import "../stylesheets/thank-you.css";
import ThankYouIllustration from "../img/illustration-thank-you.svg";

const Card = () => {

  const [ option, setOption ] = useState(0);
  const [ submitted, setSubmitted ] = useState(false);

  if (submitted) {
    return (
      <><div id="img-thank-you">
            <img src={ThankYouIllustration} />
            <p id="you-selected">You selected {option} out of 5</p>
        </div>

        <div className="text-container2">
          <h1 id="thank-you-title">Thank you!</h1>
          <p id="thank-yout-text">We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!</p>
        </div></>
    );
  }

  return(
    <form action="/thankyou">
    <div id="all">
      <div className="main-container">
        <div className="star-container">
          <img src={iconStar} />
        </div>
      </div>
        <div className="text-container" id="text-container">
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        </div>
        <div className="numbers-cont">
          <div className={option === 1 ? "number selected" : "number"} onClick={() => option === 1 ? setOption(0) : setOption(1)}>1</div>
          <div className={option === 2 ? "number selected" : "number"} onClick={() => option === 2 ? setOption(0) : setOption(2)}>2</div>
          <div className={option === 3 ? "number selected" : "number"} onClick={() => option === 3 ? setOption(0) : setOption(3)}>3</div>
          <div className={option === 4 ? "number selected" : "number"} onClick={() => option === 4 ? setOption(0) : setOption(4)}>4</div>
          <div className={option === 5 ? "number selected" : "number"} onClick={() => option === 5 ? setOption(0) : setOption(5)}>5</div>
        </div>

          <button id="submit-button" onClick={() => option == 0 ? null : setSubmitted(true)} >Submit</button>
    </div>
    </form>
)
}

export default Card;