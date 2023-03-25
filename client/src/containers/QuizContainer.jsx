import React, { useState, useEffect } from "react";
import Answer from "../components/Answer";
// import Highscore from "../components/Highscore";
import Question from "../components/Question";
import { getHighscores } from "../HighscoreService";
import { answerDelay } from "../constants";
import { Player, Controls } from '@lottiefiles/react-lottie-player';



export default function QuizContainer({ data }) {
  const [questions, setQuestions] = useState([]);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [highscores, setHighscores] = useState([])
  const [score, setScore] = useState(0)

  function questionAnswered() {
    setDisplayAnswer(true);
    setTimeout(function () {
      const questionsCopy = [...questions];
      setQuestions(questionsCopy.slice(1));
    }, answerDelay);
  }


  function correctAnswer() {
   setIsCorrect(true);
   // add points to score
   setScore(score + 1)
   // post new score to db (waiting on function for game ending)
  }


  useEffect(() => {
    setQuestions(data);
  }, [data]);

  useEffect(() => {
    setDisplayAnswer(false);
    setIsCorrect(false);
  }, [questions]);


  useEffect(()=>{
    getHighscores().then((allHighscores)=>{
    setHighscores(allHighscores);
    })
}, []);

const highestScore = Math.max.apply(Math, highscores.map(score => score.highscore))

  if (!questions.length) return "Loading...";

  const incorrectAnswers = questions[0].incorrectAnswers;
  incorrectAnswers.push(questions[0].correctAnswer);
  const allAnswers = [...new Set(incorrectAnswers)].sort();

 

  return (
    <>
    <div>
      <p>Highscore {highestScore}</p>
      <p>Score {score}</p>
    </div>

    <div>
      {displayAnswer ? (
        <p>{isCorrect ?  <Player
          autoplay
          speed="1"
          src="https://assets8.lottiefiles.com/packages/lf20_xj3qhpxz.json"
          style={{ height: '200px', width: '200px' }}
      >
              <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>: <Player
          autoplay
          speed="1"
          src="https://assets8.lottiefiles.com/packages/lf20_2bjwh0kp.json"
          style={{ height: '200px', width: '200px' }}
      >
              <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>}</p>
      ) : (
        <Question question={questions[0].question} />
      )}

      <Answer
        correct={questions[0].correctAnswer}
        allAnswers={allAnswers}
        questionAnswered={questionAnswered}
        correctAnswer={correctAnswer}
        isCorrect={isCorrect}
      />
    </div>
    </>
  );
}
