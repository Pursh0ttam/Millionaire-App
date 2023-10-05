import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Trivia from "./components/trivia";
import start from "./components/start";
import Timer from "./components/timer";

function App() {
    // const [username, setUsername] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop , setStop] = useState(false);
    const[earned , setEarned] = useState("$ 0");

    const data = [
      {
        id:1,
        question:"when did the website facebook launched?",
        answers:[
          {
            text:"2004",
            correct:true,
          },
          {
            text:"2005",
            correct:false,
          },
          {
            text:"2008",
            correct:false,
          },
          {
            text:"2009",
            correct:false,
          }
        ]
      },

      {
        id:2,
        question:"when did the  Google launched?",
        answers:[
          {
            text:"2004",
            correct:false,
          },
          {
            text:"2005",
            correct:false,
          },
          {
            text:"1998",
            correct:true,
          },
          {
            text:"2009",
            correct:false,
          }
        ]
      },
      {
        id:2,
        question:"when did the  Youtube launched?",
        answers:[
          {
            text:"2004",
            correct:false,
          },
          {
            text:"2005",
            correct:false,
          },
          {
            text:"1998",
            correct:true,
          },
          {
            text:"2009",
            correct:false,
          }
        ]
      },
      {
        id:2,
        question:"when did the  Snapchat launched?",
        answers:[
          {
            text:"2004",
            correct:false,
          },
          {
            text:"2005",
            correct:false,
          },
          {
            text:"1998",
            correct:true,
          },
          {
            text:"2009",
            correct:false,
          }
        ]
      },
      {
        id:2,
        question:"when did the  Flipkart launched?",
        answers:[
          {
            text:"2004",
            correct:false,
          },
          {
            text:"2005",
            correct:false,
          },
          {
            text:"1998",
            correct:true,
          },
          {
            text:"2009",
            correct:false,
          }
        ]
      },
    ];
  const moneyPyramid = useMemo(()=>
    [
      {id:1, amount:"$100"},
      {id:2, amount:"$200"},
      {id:3, amount:"$300"},
      {id:4, amount:"$500"},
      {id:5, amount:"$1000"},
      {id:6, amount:"$2000"},
      {id:7, amount:"$4000"},
      {id:8, amount:"$8000"},
      {id:9, amount:"$16000"},
      {id:10, amount:"$32000"},
      {id:11, amount:"$64000"},
      {id:12, amount:"$125000"},
      {id:13, amount:"$250000"},
      {id:14, amount:"$500000"},
      {id:15, amount:"$10000000"},
    ].reverse(),

   []
   );
    

  useEffect(()=>{
    questionNumber>1 &&
    setEarned(moneyPyramid.find(m=>m.id === questionNumber -1).amount);
  },[moneyPyramid,questionNumber]);
  
  return (
    <div className="app">
      {true ? (
        <>    
         <div className="main">
  {stop?(
    <h1 className="endText">You earned: {earned}</h1>
  ):(
    <>
    <div className="top">
    <div className="timer">
     <Timer setStop={setStop} questionNumber={questionNumber}/>
      </div>
  </div>
  <div className="bottom">
    <Trivia data={data} 
   setStop ={setStop}
    questionNumber ={questionNumber}
    setQuestionNumber={setQuestionNumber} />
    </div>
    </>
  )}
 </div>
 <div className="pyramid">
  <ul className="Money">
    {moneyPyramid.map((m) => (

      <li className={questionNumber === m.id? "moneyList active" : "moneyList"}>
      <span className="moneyListNumber">{m.id}</span>
      <span className="moneyListAmount">{m.amount}</span>
      </li>
      ))}
      </ul>
  </div>
    <div></div>
        </>
      ) : <start />}
</div>
  );
}

export default App;
