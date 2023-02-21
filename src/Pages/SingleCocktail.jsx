import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../component/Loading'
import axios from 'axios'
import { Link } from 'react-router-dom'

function SingleCocktail() {
  const [loading,setLoading] = useState(true)
  const [cocktail,setCocktail] = useState({})
  const {id} = useParams()
  
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
  useEffect(()=>{
    setLoading(true)
    axios.get(`${url}${id}`)
    .then((resolve)=>{
      const {drinks} = resolve.data
      if(drinks){
        console.log(drinks)
        const {
          strAlcoholic:info,
          strCategory:category,
          strDrinkThumb: image,
          strDrink: name,
          strGlass:glass,
          strInstructions:Instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5
        } = drinks[0]
        const Ingredient = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5
        ]
        const newCocktail = {
          info,name,category,glass,Instructions,Ingredient,image
        }
        setCocktail(newCocktail)
        setLoading(false)
      }
      else{
        setCocktail(null)
        setLoading(false)
      }
    })
  },[])
  if(loading){
    return <Loading />
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  }
  else{
    const {info,name,category,glass,Instructions,Ingredient,image} = cocktail
    return (
        <section className='section cocktail-section'>
          <Link to="/" className='btn btn-primary'>Back home</Link>
          <h2 className="section-title">{name}</h2>
          <div className="drink">
            <img src={image} alt={name} />
            <div className="drink-info">
              <p><span className="drink-data">Name:</span>{name}</p>
              <p><span className='drink-data'>Category:</span>{category}</p>
              <p><span className='drink-data'>Info:</span>{info}</p>
              <p><span className='drink-data'>Glass:</span>{glass}</p>
              <p><span className='drink-data'>Instrutions:</span>{Instructions}</p>
              <p>
                <span className='drink-data'>Ingredient</span>
                {Ingredient.map(recipe=>recipe === null? null :<span>{recipe}</span>)}</p>
            </div>
            </div>      
        </section>
      )
  }
}

export default SingleCocktail
