import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { RollType } from '../../types/RollType';
import { PayType } from '../../types/PayType';
let updateCount: number = 0;

type Props = {
    rollItem: RollType,
    setPay: Dispatch<SetStateAction<PayType[]>>,
    initialsPayments: PayType[],
    selectRoll: Dispatch<SetStateAction<RollType[]>>
}


const SmallCard: React.FC<Props> = ({ rollItem, setPay, initialsPayments, selectRoll }) => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        if (updateCount < 1) {

            updateCount++;

            setPay([...initialsPayments,
                {
                    name: rollItem.name,
                    price: rollItem.price,
                    counter: counter
                }
            ]);
        } else {
            const newPay: PayType[] = [...initialsPayments];
            newPay
            .splice(
                initialsPayments.findIndex(pay => pay.name === rollItem.name),
                1
            )
            .push(
                {
                    name: rollItem.name,
                    price: rollItem.price,
                    counter: counter
                }
            )

            setPay(newPay);
        }
    }, []);

    return (
        <div className="cart-item" data-id="02">
            <div className="cart-item__top">
                <div className="cart-item__img">
                    <img src={`img/roll/${rollItem.imgName}.jpg`} alt=""></img>
                </div>
                <div className="cart-item__desc">
                    <div className="cart-item__title">{rollItem.name}</div>
                    <div className="cart-item__weight">{rollItem.amount} шт. / {rollItem.weight}г.</div>

                    {/* {<!-- cart-item__details -->} */}
                    <div className="cart-item__details">

                        <div className="items items--small counter-wrapper">
                            <div
                                className="items__control"
                                data-action="minus"
                                onClick={() => selectRoll(pays => pays.filter(pay => pay.name !== rollItem.name))}
                            >
                                -
                            </div>
                            <div className="items__current" data-counter="">{counter}</div>
                            <div 
                                className="items__control"
                                data-action="plus"
                                onClick={() => setCounter(counter + 1)}
                                >
                                    +
                                </div>
                        </div>

                        <div className="price">
                            <div className="price__currency">{rollItem.price * counter} грн</div>
                        </div>

                    </div>
                    {/* {<!-- // cart-item__details -->} */}

                </div>
			</div>
		</div>
    )
}

export default React.memo(SmallCard);