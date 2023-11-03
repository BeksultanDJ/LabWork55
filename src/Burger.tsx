import React, { useState } from 'react';
import Ingredients from './Ingredients';

function Burger() {
    const [elements, setElements] = useState<string[]>([]);

    const handleCreateElement = (element) => {
        setElements([...elements, element]);
    };

    return (
        <div className="DoneBurger">
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {elements.map((element, index) => (
                    <div key={index} className={element}></div>
                ))}
                <div className="BreadBottom"></div>
                <p>Price=111</p>
            </div>
            <Ingredients onIngredientChange={handleCreateElement} elements={elements} />
        </div>
    );
}

export default Burger;
