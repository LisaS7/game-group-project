import { shuffle } from "../utils/shuffle";
import "./Answer.css";

export default function Answer({ correct, incorrect, questionAnswered }) {
  const handleAnswer = function () {
    console.log("pressed");
    questionAnswered();
  };

  incorrect.push(correct);
  const allAnswers = shuffle(incorrect);
  const answerElements = allAnswers.map((answer, index) => (
    <button onClick={handleAnswer} key={index}>
      {answer}
    </button>
  ));

  return <div>{answerElements}</div>;
}
