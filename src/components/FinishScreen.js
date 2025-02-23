function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentagePoints = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentagePoints)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points) </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
