
import React from 'react'

const Child = React.memo(({ onCl }) => {

    console.log("Child Rendered");
    const cl=()=>{
     
        onCl()
    }
    return(
    <>

    <p>child P</p>
 
    <button onClick={cl}>Click Me in child</button>;
    </>
    )
})

export default Child


// import React from 'react'

// const Child = ({ onCl }) => {

//     console.log("Child Rendered");
//     const cl=()=>{
     
//         onCl()
//     }
//     return(
//     <>

//     <p>child P</p>
 
//     <button onClick={cl}>Click Me in child</button>;
//     </>
//     )
// }

// export default Child