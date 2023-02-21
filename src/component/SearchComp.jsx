import React from 'react'
import { useContextHook } from '../Context'

export default function SearchComp() {
    const {loading,cocktails,searchTerm,setSearchterm} = useContextHook()
    const handleChange = (e)=>{
        setSearchterm(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return(
    <section className="section search">
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="name">search your favorite cocktail</label>
                <input type="text" name="name" id="name" value={searchTerm} onChange={handleChange}/>
            </div>
        </form>
    </section>
  )
}
