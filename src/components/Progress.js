function Progress({ i, totalQuestions, points, maxPoints }) {
  return (
    <header className="progress">
      <progress max={totalQuestions} value={i}></progress>
      <p>
        Question {i + 1} / {totalQuestions}
      </p>
      <p>
        {points} / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
