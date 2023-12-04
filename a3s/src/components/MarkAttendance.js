import React from 'react'

function MarkAttendance(props) {
    console.log("I am mark attendance",props)
  return (
    <div>
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
                                <button type="button" >
                                Submit
                            </button>
                            </form>
                        </div>
                        <div className='addNewform'>
                            <div className="random-number-section">
                                <h2>Random Number of the Day</h2>
                                <h3>Random Number is: </h3>
                                <h4 id="num"></h4>
                                <p id="randomNumber"></p>
                                <label htmlFor="inputNumber">Enter Random Number:</label>
                                <input type="number" id="inputNumber" />
                                <button type="button">
                                    Submit
                                </button>
                            </div>
                        </div>
                      
                    </div>

                  
                  </div>
    </div>
  )
}

export default MarkAttendance
