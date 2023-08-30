import Header from "./Header";
import Main from "./Main";
import Score from "./Score";
import "./index";
import { useEffect, useState } from "react";

function App() {
  const [playerMove, setPlayerMove] = useState("");
  const [pcMove, setPcMove] = useState("");
  const [result,setResult]=useState("select an option");

  function generatePcMove() {
    let temp = Math.round(Math.random() * 2);
    console.log(temp)
    if (temp === 0) setPcMove("rock")
    else if (temp === 1) setPcMove("scissors")
    else if (temp === 2) setPcMove("paper")
  }

  useEffect(()=>{
    generatePcMove()
  },[])
  console.log(pcMove)
  function handleClick(playerMove1) {
    
    setPlayerMove(playerMove1);
    let x=pcMove;
    console.log(playerMove1,x,playerMove1)
    if(playerMove==="rock" && x==="scissors"){
      setResult("You win")
    }
    else if(playerMove===x){
      setResult("its a tie")
    }
    
    else if(playerMove==="rock" && x==="paper"){
      setResult("You lose")
    }
   else if(playerMove==="scissors" && x==="paper"){
      setResult("You win")
    }
   else if(playerMove==="scissors" && x==="rock"){
      setResult("You lose")
    }
   else if(playerMove==="paper" && x==="rock"){
      setResult("You win")
    }
   else if(playerMove==="paper" && x==="scissors"){
      setResult("You lose")
    }
  }

  //  useEffect(function a(){
  //   handleClick();
  //   a();
  //  },[])
   useEffect(function a(){
    handleClick();
    a();
   },[])

  return (
    <div className="main1">
      <Header />
      <Main handleClick={handleClick} />
      <Score result={result} pcMove={pcMove} playerMove={playerMove}/>
    </div>
  );
}

export default App;



