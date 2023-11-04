import React, { useState } from 'react';
import Ingredients from './Ingredients';

function Burger() {
    const [selectedIngredients, setSelectedIngredients] = useState<{ [key: string]: number }>({});

    const handleIngredientChange = (newIngredients: { [key: string]: number }) => {
        setSelectedIngredients(newIngredients);
    };

    return (
        <div className="DoneBurger">
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {Object.keys(selectedIngredients).map((ingredientName, index) => {
                    const ingredientCount = selectedIngredients[ingredientName];
                    const elements = [];
                    for (let i = 0; i < ingredientCount; i++) {
                        elements.push(<div key={`${ingredientName}-${i}`} className={ingredientName}></div>);
                    }
                    return elements;
                })}
                <div className="BreadBottom"></div>
                <p>Price=111</p>
            </div>
            <Ingredients onIngredientChange={handleIngredientChange} selectedIngredients={selectedIngredients} />
        </div>
    );
}

export default Burger;
