import "./Answer.css";
import { motion } from "framer-motion";

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
  const correctAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/4232");
  const wrongAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/4221");
  

  const handleAnswer = function (e) {
    if (e.target.textContent === correct) {
      correctAnswer();
      questionAnswered();
      correctAudio.play();
    } else {
      wrongAudio.play();
    }
    questionAnswered();
  };

  const answerElements = allAnswers.map((answer, index) => (
    <button
      className={isCorrect && answer === correct ? "correct-answer" : "answer-btn"}
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
