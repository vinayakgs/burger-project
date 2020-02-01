import React, {Component} from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad: 10,
    bacon: 13,
    cheese: 17,
    meat: 20
}

class BuildBurger extends Component {
    
    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 99,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map((ingredient)=>{
                return ingredients[ingredient]
            }).reduce((sum,el) => {
                return sum + el;
            },0);
        this.setState({purchasable:sum>0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedcount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedcount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICE[type];
        this.setState({ingredients:updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0)
        {
            return;
        }
        const updatedcount = oldCount - 1; 
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedcount;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
        this.setState({ingredients:updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);   
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    totalPrice={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BuildBurger;