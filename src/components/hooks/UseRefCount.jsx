import React, { useEffect, useRef, useState } from 'react'

export const UseRefCount = () => {
    const[count,setCount]=useState(0)
    const preCount=useRef(null)
    useEffect(()=>{
        preCount.current=count
    },[count])
  return (
    <>

    <div style={{marginTop:'100px'}}>countv {count}</div>
    <p>PREVIOUS COUNT  {preCount.current}</p>
    <button onClick={()=> setCount(pre=> pre+1)}>increment</button>
    </>
  )
}
