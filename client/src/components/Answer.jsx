import { shuffle } from "../utils/shuffle";
import "./Answer.css";

export default function Answer({
  correct,
  incorrect,
  questionAnswered,
  correctAnswer,
  isCorrect,
}) {
  console.log(correct);
  const handleAnswer = function (e) {
    console.log(e.target.textContent);
    if (e.target.textContent === correct) {
      correctAnswer();
      questionAnswered();
    }
  };

  incorrect.push(correct);
  const allAnswers = shuffle([...new Set(incorrect)]);
  const answerElements = allAnswers.map((answer, index) => (
    <button
      className={isCorrect && answer === correct ? "correct" : ""}
      onClick={(e) => handleAnswer(e)}
      key={index}
    >
      {answer}
    </button>
  ));

  return <div className="answers-container">{answerElements}</div>;
}
