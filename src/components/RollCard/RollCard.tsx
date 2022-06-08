import React, { Dispatch, SetStateAction } from "react";
import './RollCard.css';
import PriceCounter from "../PriceCounter/PriceCounter";
import rolls from '../../api/api.json';
import { RollType } from '../../types/RollType';

type Props = {
    selectRoll: Dispatch<SetStateAction<RollType[]>>,
    state: RollType[],
    checkIfContain: (name: string) => boolean
};

const RollCard: React.FC<Props> = ({ 
        selectRoll, 
        state, 
        checkIfContain 
    }) => {

    console.log('render rollcard');

    const handleClick = (
        price: number, 
        weight: number, 
        name: string, 
        imgName: string,
        amount: number
        ) => {
        selectRoll(
            [
                ...state,
                {
                    price,
                    weight,
                    name,
                    imgName,
                    amount
                }
            ]
        );
    }

    return (
        <>
            {
                 rolls.map(roll => (
                    <div className="col-md-6" key={roll.name}>
                        <div className="card mb-4" data-id="01">
                            <img className="product-img" src={`img/roll/${roll.imgName}.jpg`} alt=""></img>
                            <div className="card-body text-center">
                                <h4 className="item-title">{roll.name}</h4>
                                <p><small data-items-in-box className="text-muted">{roll.amount} шт.</small></p>
                                <PriceCounter
                                    key={roll.name}
                                    rollWeight={roll.weight}
                                    rollPrice={roll.price}                                                        
                                />
                                <button 
                                    data-cart 
                                    type="button" 
                                    className="btn btn-block btn-outline-warning"
                                    onClick={() => !checkIfContain(roll.name) && (handleClick(
                                        roll.price, 
                                        roll.weight, 
                                        roll.name, 
                                        roll.imgName,
                                        roll.amount
                                    ))}
                                >
                                    + в корзину
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default React.memo(RollCard);