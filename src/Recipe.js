import React from 'react'
import style from "./recipe.module.css"


function Recipe({title, image, calories, ingredients }) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>{calories}</p>
            <img className={style.image} src={image}/>
        </div>
    )
}

export default Recipe
