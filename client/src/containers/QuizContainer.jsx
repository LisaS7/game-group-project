import React, { useState, useEffect } from "react";
import Answer from "../components/Answer";
import Question from "../components/Question";

export default function QuizContainer({ data }) {
  const [questions, setQuestions] = useState([]);

  console.log("quiz container 1", data);

  useEffect(() => {
    setQuestions(data);
  }, [data]);

  console.log("quiz container 2", questions);

  if (!questions.length) return "Loading...";

  return (
    <div>
      <Question question={questions[0].question} />
      <Answer
        correct={questions[0].correctAnswer}
        incorrect={questions[0].incorrectAnswers}
      />
    </div>
  );
}
