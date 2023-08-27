

function Score({result,pcMove,playerMove}) {

    
  return (
    <div className="score">
      <p>{result}</p>
      <p>
        You chose {playerMove} and Pc chose {pcMove}
      </p>
      <p>Your Score : x</p>
      <p>Pc's Score : x</p>
      <button>Reset Score</button>
    </div>
  );
}

export default Score;
