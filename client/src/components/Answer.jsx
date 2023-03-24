import { shuffle } from "../utils/shuffle";

export default function Answer({ correct, incorrect }) {
  incorrect.push(correct);
  const allAnswers = shuffle(incorrect);

  return <div>{allAnswers}</div>;
}
