import "./Answer.css";

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
