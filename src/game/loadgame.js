import React, { useEffect, useState } from "react";

import { Redirect } from "react-router-dom";

export default function LoadGame(){
    const [seconds, setSeconds] = useState(5);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
          }, 1000);
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);

      return(
          <div className="bg-joy-purple3" style={{display:"flex", justifyContent:"center", alignItems:"center",height:"100vh"}}>
              <p style={{fontSize:"60px", color:"white"}}>{seconds}</p>
              {seconds<0 ? <Redirect to="/game1"></Redirect>:null}
          </div>


      )
}