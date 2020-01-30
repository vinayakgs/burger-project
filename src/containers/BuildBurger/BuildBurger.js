import React, {Component} from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
class BuildBurger extends Component {
    render () {
        return(
            <Aux>
                <Burger/>
                <div>BuildControls</div>
            </Aux>
        );
    }
}

export default BuildBurger;