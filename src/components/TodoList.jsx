import React, { useState } from 'react'

export const TodoList = () => {
    const [task,setTask]=useState([]);
    const[inputValue,setInputValue]=useState('');


const addTask=()=>{
    if(inputValue.trim()!==""){
    setTask([...task, inputValue])
    setInputValue('')
}
}

const deleteTaks=(id)=>{
const updateTASK= task.filter((t,i)=> i !== id) 

setTask(updateTASK);
}
  return (
    <>
    <div>
    <div className='d-flex mt-5' style={{marginTop:'40px'}}>
        <input  type='text' onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
        <button onClick={addTask}>add task</button>
       
    </div>

    <ul className=''>
            {
                task && task.map((task,index)=>(
                    
                   
                    <li key={index}>{task}       <button onClick={() => deleteTaks(index)}>delete task</button></li>
               

                    
                ))
            }
        </ul>
    
    </div>
    
   
     
    </>
  )
}
