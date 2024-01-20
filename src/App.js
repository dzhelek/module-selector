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
          <h1>Specialty Chooser</h1>
          <p>{questions[currentQuestionIndex].question}</p>
          <div className="answers">
            {shuffledAnswers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswer(answer)}>
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
