import React from 'react';

function TakeAttendance() {
  return (
    <div>
      <h2>Take my attendance</h2>
      <div className="CourseContent">
        <div className="CourseContentRow">
            <div className='addNewform'>
                <h2>Question of the Day</h2>
                <p>What is the capital of France?</p>
                <form id="quizForm" >
                    <label>
                    <input type="radio" name="answer" value="a" /> Paris
                    </label>
                    <label>
                    <input type="radio" name="answer" value="b" /> London
                    </label>
                    <label>
                    <input type="radio" name="answer" value="c" /> Berlin
                    </label>
                    <label>
                    <input type="radio" name="answer" value="d" /> Madrid
                    </label>
                    <button type="button" onClick={submitQuiz}>
                    Submit
                </button>
                </form>
            </div>
            <div className='addNewform'>
                <div className="random-number-section">
                    <h2>Random Number of the Day</h2>
                    <h3>Random Number is: </h3>
                    <h4 id="num" onLoad={GenRandomNumber}></h4>
                    <p id="randomNumber"></p>
                    <label htmlFor="inputNumber">Enter Random Number:</label>
                    <input type="number" id="inputNumber" />
                    <button type="button" onClick={submitRandomNumber}>
                        Submit
                    </button>
                </div>
            </div>
          
        </div>

       
      </div>
    </div>
  );
}

function submitQuiz() {
  // Implement quiz submission logic
}

function GenRandomNumber() {
  // Implement logic to generate a random number
}

function submitRandomNumber() {
  // Implement logic to submit the random number
}

export default TakeAttendance;
