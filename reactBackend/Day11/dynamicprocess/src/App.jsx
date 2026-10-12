import React, { useState } from 'react'

const App = () => {
  const [data,setData]=useState([])
  const [save,setSave]=useState("")
  const changeHandle=(e)=>{
    
    setSave(e.target.value)
  }

  const handleClick=()=>{
  setData(save)
  }

  return (
    <>
    <div>{data}
      {/* <div><h1>{data.map((e,i)=>(
        <h4 key={i}>{e}</h4>

      ))}</h1></div> */}
      <input type="text"  value={save} onChange={changeHandle}/>
      <button onClick={handleClick}>click 
      </button>
    </div>
    </>
  )
}

export default App