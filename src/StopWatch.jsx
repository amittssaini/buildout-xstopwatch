import React, { useEffect, useState } from 'react'

const StopWatch = () => {
    const [time,setTime]=useState(0)
    const [isRunning ,setIsRunning]=useState(false);
    const [timerId ,setTimerId]=useState(null);

    const displayTime=(sec)=>{
        let min = Math.floor(sec/60);
     let seconds= Math.floor(sec%60);
     return (`${min}:${seconds<10 ?'0':''}${seconds}`)
    }
    const startStop=()=>{
         setIsRunning(!isRunning);
    }
    const restart=()=>{
        setIsRunning(false)
        setTime(0);
    }

    useEffect(()=>{
        
        if(isRunning)
        {
            let temp=setInterval(()=>{
                setTime((previous)=>previous+1);

        },1000) 
    setTimerId(temp)}
        else{
            if(timerId){
        clearInterval(timerId);}}
    },[isRunning])
  return (
    <div>
        <h1>Stopwatch</h1>
        <div>
            <p>Time: {displayTime(time)}</p>
            <div>
                <button onClick={startStop}>{isRunning?'Stop':'Start'}</button>
                <button onClick={restart}>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default StopWatch