import baconImg from './assets/bacon.png';
import saladImg from './assets/salad.png';
import cheeseImg from './assets/cheese.png';
import cutletImg from './assets/cutlet.png';
import {useState} from "react";

function Ingredients() {
    const [products, setProducts] = useState<{
        bacon: number;
        salad: number;
        cheese: number;
        cutlet: number;
    }>({
        bacon: 0,
        salad: 0,
        cheese: 0,
        cutlet: 0,
    });

    const increaseQuantity = (product) => {
        setProducts({
            ...products,
            [product]: products[product] + 1,
        });
    }

    const decreaseQuantity = (product) => {
        if (products[product] > 0) {
            setProducts({
                ...products,
                [product]: products[product] - 1,
            });
        }
    }


    return (


            <div className="addIngredientsBlock">
                <div className="IngredientsBtn">
                    <img className="ingredient" src={baconImg} alt="bacon"/>
                    <span>Bacon</span>
                    <span>{products.bacon}</span>
                    <button onClick={() => increaseQuantity('bacon')}>+</button>
                    <button onClick={() => decreaseQuantity('bacon')}>-</button>
                </div>
                <div className="IngredientsBtn">
                    <img className="ingredient" src={saladImg} alt="salad"/>
                    <span>Salad</span>
                    <span>{products.salad}</span>
                    <button onClick={() => increaseQuantity('salad')}>+</button>
                    <button onClick={() => decreaseQuantity('salad')}>-</button>
                </div>
                <div className="IngredientsBtn">
                    <img className="ingredient" src={cutletImg} alt="cutlet"/>
                    <span>Cutlet</span>
                    <span>{products.cutlet}</span>
                    <button onClick={() => increaseQuantity('cutlet')}>+</button>
                    <button onClick={() => decreaseQuantity('cutlet')}>-</button>
                </div>
                <div className="IngredientsBtn">
                    <img className="ingredient" src={cheeseImg} alt="cheese"/>
                    <span>Cheese</span>
                    <span>{products.cheese}</span>
                    <button onClick={() => increaseQuantity('cheese')}>+</button>
                    <button onClick={() => decreaseQuantity('cheese')}>-</button>
                </div>
            </div>
    )
}

export default Ingredients;