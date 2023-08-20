import React,{useRef,useEffect} from 'react'
import { useContextHook } from '../Context'

export default function SearchComp() {
    const {loading,input,setInput,cocktails,searchTerm,setSearchterm} = useContextHook()
    const inputRef = useRef()
    // const handleChange = (e)=>{
    //     setSearchterm(inputRef.current.value)
    //    // e.preventDefault()
    // }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setSearchterm(input)
    }
    useEffect(()=>{
        inputRef.current.focus();
    },[])
    return(
    <section className="section search">
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="name">search your favorite cocktail</label>
                <input type="text" name="name" id="name" value={input} onChange={(e)=>{setInput(e.target.value)}} ref={inputRef}/>
                <button className='btn btn-primary btn-generate' /*onClick={handleChange}*/>SEARCH</button>
            </div>
        </form>
    </section>
  )
}
