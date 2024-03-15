// App.js
import React, { useState, useEffect } from "react";
import questions from "./questions";
import Results from "./Results";
import "./App.css";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ SpecialityA: 0, SpecialityB: 0 });
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      setShowResults(true);
    } else {
      shuffleAnswers();
    }
  }, [currentQuestionIndex]);

  const shuffleAnswers = () => {
    const currentAnswers = questions[currentQuestionIndex].answers.slice();
    for (let i = currentAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [currentAnswers[i], currentAnswers[j]] = [currentAnswers[j], currentAnswers[i]];
    }
    setShuffledAnswers(currentAnswers);
  };

  const handleAnswer = (selectedAnswer) => {
    const selectedSpeciality = questions[currentQuestionIndex].answers.indexOf(selectedAnswer) === 0
      ? "SpecialityA"
      : "SpecialityB";

    setScore((prevScore) => ({
      ...prevScore,
      [selectedSpeciality]: prevScore[selectedSpeciality] + 1,
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="App">
      {showResults ? (
        <Results score={score} />
      ) : (
        <div>
          <div id="header">
            <h1>Module Selector</h1>
            <h2>{questions[currentQuestionIndex].question}</h2>
          </div>
          <div id="main">
            <div className="answers">
                {shuffledAnswers.map((answer, index) => (
                  <div className="box" key={index}>
                    <span className="title">{answer}</span>
                    <div className="scrollbox">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <button className="" onClick={() => handleAnswer(answer)}>
                      SELECT
                    </button>
                  </div>
                ))}
            </div>
          </div>  
        </div>
      )}
    </div>
  );
}

export default App;
