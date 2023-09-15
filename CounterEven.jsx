import React from 'react'
import { useState,useMemo } from 'react'



function CounterEven() {
const[counterOne,setCounterOne] = useState(0)
const[counterTwo,setCounterTwo] = useState(0)

const incrementCounterOne=()=>{
 setCounterOne(counterOne+1)
}
const incrementCounterTwo=()=>{
  setCounterTwo(counterTwo+1)
 }
 
 
   const isEven=useMemo(()=>{
    console.log('hgfsjhxfasgh');
    let i=0
    while(i<20000000)i++
    return counterOne%2===0
   },[counterOne])
 


  return (
    <div>
        <div>
        <button onClick={incrementCounterOne}>CounterOne -{counterOne}</button>
        <span> {isEven? 'Even':'Odd'}</span>
        </div>
        <div>
        <button onClick={incrementCounterTwo}>CounterTwo -{counterTwo}</button>
        </div>
    </div>
  )
}

export default CounterEven