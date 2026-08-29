import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);



      const onSubmit= useCallback(()=>{
  console.log("parent func called ");

      },[count])

  

  return (
    <>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>Imcrement in parent</button>
        <div style={{marginTop:'100px'}}>

        </div>
        <Child onCl={onSubmit} 
        // setCount={setCount} count={count}
        />
        
      </div>
     
    </>
  );
};

export default Parent;
