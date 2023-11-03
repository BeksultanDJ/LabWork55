import baconImg from './assets/bacon.png';
import saladImg from './assets/salad.png';
import cheeseImg from './assets/cheese.png';
import cutletImg from './assets/cutlet.png';
import './App.css';

function Ingredients() {

    return (
        <div className="orderWindow">
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                <div className="Salad"></div>
                <div className="Cheese"></div>
                <div className="Meat"></div>
                <div className="BreadBottom"></div>
            </div>
            <div className="addIngredientsBlock">
                <div className="IngredientsBtn">
                    <img className="ingredient" src={baconImg} alt="bacon"/>
                    <span>Bacon</span>
                    <span>x1</span>
                    <button>+</button>
                    <button>-</button>
                </div>
                <div className="IngredientsBtn">
                    <img className="ingredient" src={saladImg} alt="salad"/>
                    <span>Salad</span>
                    <span>x1</span>
                    <button>+</button>
                    <button>-</button>
                </div>
                <div className="IngredientsBtn">
                    <img className="ingredient" src={cutletImg} alt="cutlet"/>
                    <span>Cutlet</span>
                    <span>x1</span>
                    <button>+</button>
                    <button>-</button>
                </div>
                <div className="IngredientsBtn">
                    <img className="ingredient" src={cheeseImg} alt="cheese"/>
                    <span>Cheese</span>
                    <span>x1</span>
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        </div>
    )
}

export default Ingredients;