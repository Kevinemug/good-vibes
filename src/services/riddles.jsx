/* eslint-disable no-unused-vars */
import React from 'react';
import './riddles.css'
import { useState, useEffect } from 'react';
const Riddle = () => {
    const [riddles, setRiddles] = useState([]);
    const [currentRiddle, setCurrentRiddle] = useState(null);
    const [guess, setGuess] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
  const[visible,setVisible]=useState(false)
    useEffect(() => {
        handleNext() ;
    }, []);
  
    const handleSubmit = (event) =>{
      event.preventDefault();
      console.log('submited:',guess)
      if (guess.toLowerCase() === currentRiddle.answer.toLowerCase()) {
        setIsCorrect(true);
      } else {
        setShowAnswer(true);
      }
      console.log(riddles.length)
    }
  
    function handleNext() {
      const currentIndex = riddles.indexOf(currentRiddle);
      if (currentIndex === riddles.length - 1) {
        setCurrentRiddle(riddles[0]);
      } else {
        setCurrentRiddle(riddles[currentIndex + 1]);
      }
      setGuess('');
      setShowAnswer(false);
      setIsCorrect(false);
      setVisible(true)
      fetch('https://api.api-ninjas.com/v1/riddles')
      .then(response => response.json())
      .then(data => {
        setRiddles(data);
setVisible(false)
        setCurrentRiddle(data[0]);
      });
    }
    const handleKeyPress = event => {
        if (event.key === 'Enter') {
          console.log('Enter key pressed');
        }
      };
    if (!currentRiddle) {
        return <p>Loading...</p>;
      }
    
      const { title, question, answer } = currentRiddle;
  
    return (
<>
            {visible ? (<div style={{fontSize:"50px",color:"green"}}>loading...</div>) : (          <div className="quiz-container">
{     title&&       <h2 className="quiz-title">{currentRiddle.title}</h2>
}
{   question &&         <p className="quiz-question">{currentRiddle.question}</p>
}            {!isCorrect && (
              <form onSubmit={handleSubmit} className="quiz-form">
                <label>

                  Your answer:
                  <input type="text" value={guess  || ''}  onChange={event => setGuess(event.target.value)} className="quiz-input" onKeyPress={handleKeyPress} />
                </label>
                <button type="submit" className="quiz-button" >Submit</button>
              </form>
            )}
            {showAnswer && (
              <div className="quiz-feedback">
                <p className="quiz-feedback-text">Incorrect! The answer is: { answer && currentRiddle.answer}</p>
                <button onClick={handleNext} className="quiz-button">Next question</button>
              </div>
            )}
            {isCorrect && (
              <div className="quiz-feedback">
                <p className="quiz-feedback-text">Congratulations! You got it right!</p>
                <button onClick={handleNext} className="quiz-button">Next question</button>
              </div>
            )}
          </div>
)}
</>
    );}
 
export default Riddle;