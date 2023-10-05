import React, { useEffect, useState } from "react";
import questionsound from "../assets/question.mp3";
import useSound from "use-sound";

export default function Timer({setStop,questionNumber}) {
    const [timer,setTimer] = useState(30);
    const [letsquestion] = useSound(questionsound);

    useEffect(()=>{
       

        if (timer===0) return setStop(true);
        const interval = setInterval(()=>{
            setTimer((prev) => prev - 1);
        },1000);
        return  () => clearInterval(interval);
    },[setStop,timer]);


    useEffect(()=>{
setTimer(30);
    },[questionNumber]);
  return timer;
}
