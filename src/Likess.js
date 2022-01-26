import React,{useState} from 'react'

const Likess = () => {
  const[count,setCount]=useState(0);
  const inc=()=>{
    setCount(count+1);
  }
  const dec=()=>{
    if(count>0)
    setCount(count-1);
  }
  return (
    <div>
      <button onClick={inc} >+</button>
      {count}
      <button onClick={dec}>-</button>
    </div>
  )
}

export default Likess;