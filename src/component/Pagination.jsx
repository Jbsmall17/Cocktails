import React from 'react'
import { useContextHook } from '../Context'
import {AiFillFastBackward,AiFillFastForward} from "react-icons/ai"

export default function Pagination() {
    const {count,cocktails,setCount} = useContextHook()
    const handleClick = (e)=>{
        setCount(parseInt(e.target.textContent) - 1)
    }
    const countCheck = (number)=>{
        let count;
        if(number > 4){
            count = 0
        }
        else if (number < 0){
            count = 4
        }
        else{
            count = number
        }
        return count
    }
    //console.log(countCheck(-3))
    const increaseCount = ()=>{
        setCount((prev)=>{
            let count = prev + 1;
            return countCheck(count)            
        })
    }
    const decreaseCount = ()=>{
        setCount((prev)=>{
            let count = prev - 1;
            return countCheck(count)            
        })
    }
  return (
    <ul className='pagination'>
        <li onClick={decreaseCount}><AiFillFastBackward /></li>
        {
            cocktails.map((cocktail,index)=>{
                return <li key={index} onClick={handleClick}>{index + 1}</li>
              })
        }
        <li onClick={increaseCount}><AiFillFastForward /></li>
    </ul>
  )
}
