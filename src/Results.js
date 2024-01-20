// Results.js
import React from "react";

import questions from "./questions";

const Results = ({ score }) => {
  return (
    <div>
      <h1>Results</h1>
      <table>
        <thead>
          <tr>
            <th>Speciality</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(score).map(([speciality, score]) => (
            <tr key={speciality}>
              {/* <td>{speciality}</td> */}
              <td>{speciality === "SpecialityA" ? "Софтуерни приложения с повишена сигурност" : "Комуникационна и мрежова сигурност"}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </table>

       {/* Additional table for information about each answer */}
      <h2>{
      score.SpecialityA > score.SpecialityB
      ? "Софтуерни приложения с повишена сигурност"
      : score.SpecialityA < score.SpecialityB
      ? "Комуникационна и мрежова сигурност"
      : "трудно е да се прецени"
        } </h2>
      <table>
        <thead>
          <tr>
            <th>Софтуерни приложения с повишена сигурност</th>
            <th>Комуникационна и мрежова сигурност</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q, index) => (
            <tr key={index}>
              <td>{q.answers[0]}</td>
              <td>{q.answers[1]}</td>
              {/* <td>{(q.answers[0].speciality)}</td> */}
            </tr>
          ))}
          {/* {questions.map((q, index) => ( */}
            {/* <tr key={index}> */}
              {/* <td>{(q.answers[1].speciality)}</td> */}
            {/* </tr> */}
          {/* ))} */}
        </tbody>
      </table>

    </div>
  );
};

export default Results;
