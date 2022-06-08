import React, { useState } from "react";


type Props = {
    rollWeight: number,
    rollPrice: number
}

const PriceCounter: React.FC<Props> = ({ rollPrice, rollWeight }) => {
    console.log('render ' + rollWeight);

    const [counterOfRolls, setCounter] = useState(1);
    return (
        <>
        <div className="details-wrapper">
            <div className="items counter-wrapper">
                <div 
                    className="items__control"
                    data-action="minus"
                    onClick={
                        () => counterOfRolls > 1 && (setCounter(counterOfRolls - 1))
                    }
                >
                        -
                    </div>
                <div className="items__current" data-counter>{counterOfRolls}</div>
                <div
                    className="items__control"
                    data-action="plus"
                    onClick={
                        () => counterOfRolls < 16 && (setCounter(counterOfRolls + 1))
                    }
                >
                        +
                </div>
            </div>
            <div className="price">
                <div className="price__weight">{counterOfRolls * rollWeight}г</div>
                <div className="price__currency">{counterOfRolls * rollPrice}грн</div>
            </div>
            </div>
        </>
    )
}

export default React.memo(PriceCounter);