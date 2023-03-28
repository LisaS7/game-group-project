import "./Answer.css";
import { motion } from "framer-motion";
import { correctAnswerAudio, incorrectAnswerAudio } from "../constants";

const answersVariant = {
  initial: { y: "110vh" },
  animate: { y: 0, transition: { duration: 1.5 } },
};

export default function Answer({
  correct,
  allAnswers,
  questionAnswered,
  correctAnswer,
  isCorrect,
}) {
  const correctAudio = new Audio(correctAnswerAudio);
  const wrongAudio = new Audio(incorrectAnswerAudio);

  const handleAnswer = function (e) {
    questionAnswered();
    if (e.target.textContent === correct) {
      correctAnswer();
      correctAudio.play();
    } else {
      wrongAudio.play();
    }
  };

  const answerElements = allAnswers.map((answer, index) => (
    <button
      className={
        isCorrect && answer === correct ? "correct-answer" : "answer-btn"
      }
      onClick={(e) => handleAnswer(e)}
      key={index}
    >
      {answer}
    </button>
  ));

  return (
    <motion.div
      className="answers-container"
      variants={answersVariant}
      initial="initial"
      animate="animate"
    >
      {answerElements}
    </motion.div>
  );
}
