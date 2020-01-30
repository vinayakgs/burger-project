import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/Burgeringredient';
const burger = props => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey =>{
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((err, el)=>{
            return err.concat(el); 
        }, []);

        console.log(transformedIngredients);

        if(transformedIngredients.length === 0){
            transformedIngredients = <p>Please add some ingredients</p>;
        }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;