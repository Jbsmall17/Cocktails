import React, { useEffect,useState } from 'react'
import { useContextHook } from '../Context'
export default function Nosearch() {
    const {setCocktails,cocktails,setSearchterm,setInput} = useContextHook()
    const backHome = () =>{
        setInput('')
        setSearchterm('')
    }
  return (
    <main>
        <h2 className="section-title">no cocktails matched your search criteria</h2>
        <button className='btn btn-primary btn-backhome' onClick={()=>{backHome()}}>Back Home</button>
    </main>
  )
}
