import "./Answer.css";

export default function Answer({
  correct,
  allAnswers,
  questionAnswered,
  correctAnswer,
  isCorrect,
}) {
  const handleAnswer = function (e) {
    if (e.target.textContent === correct) {
      correctAnswer();
      questionAnswered();
    }
  };

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
