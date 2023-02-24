import React,{useEffect,useState} from 'react'
import Loading from '../component/Loading'
import SearchComp from '../component/SearchComp'
import SingleCocktails from '../component/SingleCocktails'
import { useContextHook } from '../Context'
import {useNavigate} from "react-router-dom"
import Nosearch from './Nosearch'
import Pagi from '../component/Pagination'

function Home() {
  const {count,cocktails,loading,searchTerm,setSearchterm} = useContextHook()
  console.log()
  if(loading){
    return <Loading />
  }
  if (cocktails.length < 1){
      return <Nosearch />
  }
  return (
    <main>
      <SearchComp/>
      <section className='section'>
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {
          cocktails[count].map((item)=>{
            const {idDrink,strAlcoholic,strDrink,strDrinkThumb,strGlass} = item
            return <SingleCocktails key={idDrink} {...item}/> 
          })
        }
      </div>
      <Pagi />
      </section>
    </main>
  )
}

export default Home
