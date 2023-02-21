import React from 'react'
import Loading from '../component/Loading'
import SearchComp from '../component/SearchComp'
import SingleCocktails from '../component/SingleCocktails'
import { useContextHook } from '../Context'

function Home() {
  const {cocktails,loading,searchTerm,setSearchterm} = useContextHook()
  if(loading){
    return <Loading />
  }
  if (cocktails.length < 1){
    return (
      <main>
        <h2 className="section-title">no cocktails matched your search criteria</h2>
      </main>
    )
  }
  return (
    <main>
      <SearchComp/>
      <section className='section'>
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {
          cocktails.map((item)=>{
            const {idDrink,strAlcoholic,strDrink,strDrinkThumb,strGlass} = item
            return <SingleCocktails key={idDrink} {...item}/> 
          })
        }
      </div>
      </section>
    </main>
  )
}

export default Home
