import React, { useEffect, useRef, useState } from 'react'

export const UseRefDOM = () => {
    const [bgColor, setBgColor] = useState("white");
    const input=useRef(null);
    useEffect(()=>{
        // input.current.focus();  //without this code also input filed border become bright because its is default behaviour
        input.current.style.backgroundColor='red'
    
    },[])

  return (
    <div style={{marginTop:'200px'}}>

        <input  ref={input} type='text' 
        //   style={{ backgroundColor: bgColor }}
        //   onFocus={() => setBgColor("lightblue")} // Change color on focus
        //   onBlur={() => setBgColor("red")}
        />
    </div>
  )
}


