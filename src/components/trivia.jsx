import React, { useEffect, useState } from "react";
import useSound from "use-sound";

import questionsound from "../assets/question.mp3";
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";

export default function Trivia({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {

  const[isload,setIsload] =useState(false)
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answers");
  const [letsquestion] = useSound(questionsound);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);



 
 
    useEffect(() => {
    
      letsquestion()
    
    }, [letsquestion]);


   
    

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]); ///data and questionNumbers are depenedicies []

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

   const handleClick = (a) => {
         setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );

    delay(5000, () => {
      if (a.correct) {
        correctAnswer();
        // console.log("ghfggh"); 
            delay(1000,
          () => {
            setQuestionNumber((prev) => prev + 1);
            setSelectedAnswer(null);
          })
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
   };

  return (
    <div className="trivia">
      <div className="questions ">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
