import React, { useState } from 'react'

const App = () => {
  let [count, setCount] = useState(0)

   let [obj,setObj]= useState({name:"harish"})

  const handleClick=()=>{
   setCount(count+1)
   console.log(count);
   
  }

  const clickHere =()=>{
    const datas= {...obj,name:"harini"}
    setObj(datas)
  }
  
  
  
  return (
    <>
    <p>{count}</p>
    <button onClick={handleClick}>CLICK HERE</button>
        <button onClick={clickHere}> HERE</button>
        <p>{obj.name}</p>

      

    </>
  )
}

export default App