import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleCocktails({idDrink,strAlcoholic,strDrink,strDrinkThumb,strGlass}) {
  return (
    <article className='cocktail'>
        <div className="img-container">
            <img src={strDrinkThumb} alt={strDrink} />
        </div>
        <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}
        </h4>
        <p>{strAlcoholic}</p>
        <Link to={`/cocktails/${idDrink}`} className='btn btn-details btn-primary'>Details</Link>
        </div>
    </article>
  )
}

