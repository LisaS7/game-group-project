import React, { useState, useEffect } from "react";
import Answer from "../components/Answer";
import Question from "../components/Question";

export default function QuizContainer({ data }) {
  const [questions, setQuestions] = useState([]);

  function questionAnswered() {
    const questionsCopy = [...questions];
    setQuestions(questionsCopy.slice(1));
    console.log("question answered", questions);
  }

  useEffect(() => {
    setQuestions(data);
  }, [data]);

  if (!questions.length) return "Loading...";

  return (
    <div>
      <Question question={questions[0].question} />
      <Answer
        correct={questions[0].correctAnswer}
        incorrect={questions[0].incorrectAnswers}
        questionAnswered={questionAnswered}
      />
    </div>
  );
}
