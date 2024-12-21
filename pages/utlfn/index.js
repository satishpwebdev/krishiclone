import React, { useEffect, useState } from "react";

const index = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
      let timerID;
  
      if (timer > 0) {
        timerID = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
      } else {
        clearInterval(timerID);
      }
      return () => clearInterval(timerID);
    }, [timer]);
  return (
    <>
    <div className="container">
        <h2>Time {timer}</h2>

        <button onClick={()=> {setTimer(10)}}>Set Time</button>
    </div>
    </>
);
};

export default index;
