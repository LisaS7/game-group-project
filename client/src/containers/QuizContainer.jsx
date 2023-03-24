import React, { useState, useEffect } from "react";
import Answer from "../components/Answer";
import Question from "../components/Question";
import { answerDelay } from "../constants";

export default function QuizContainer({ data }) {
  const [questions, setQuestions] = useState([]);
  const [displayAnswer, setDisplayAnswer] = useState(false);

  function questionAnswered() {
    setDisplayAnswer(true);
    setTimeout(function () {
      const questionsCopy = [...questions];
      setQuestions(questionsCopy.slice(1));
    }, answerDelay);
  }

  useEffect(() => {
    setQuestions(data);
  }, [data]);

  useEffect(() => {
    setDisplayAnswer(false);
  }, [questions]);

  if (!questions.length) return "Loading...";

  return (
    <div>
      {displayAnswer ? (
        <p>Display result here!!</p>
      ) : (
        <Question question={questions[0].question} />
      )}

      <Answer
        correct={questions[0].correctAnswer}
        incorrect={questions[0].incorrectAnswers}
        questionAnswered={questionAnswered}
      />
    </div>
  );
}
