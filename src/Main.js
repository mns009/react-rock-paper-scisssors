function Main({ handleClick }) {
  return (
    <main>
      <div className="element" onClick={()=>handleClick("rock")}>
        Rock ✊
      </div>
      <div className="element" onClick={()=>handleClick("paper")}>
        Paper✋
      </div>
      <div className="element" onClick={()=>handleClick("scissors")}>
        Scissors✌
      </div>
    </main>
  );
}

export default Main;
