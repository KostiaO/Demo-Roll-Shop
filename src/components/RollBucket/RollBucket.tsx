import React, { Dispatch, SetStateAction, useState } from "react";
import './RollBucket.css';
import { RollType } from '../../types/RollType';
import SmallCard from '../SmallCard/SmallCard';
import { PayType } from '../../types/PayType';

type Props = {
	rollItems: RollType[],
	selectRoll: Dispatch<SetStateAction<RollType[]>>
};

export const RollBucket: React.FC<Props> = ({ rollItems, selectRoll }) => {

	const [cardPay, setPay] = useState<PayType[]>([]);

    return (
        <div className="col-md-4">
        <div className="card mb-4">
					<div className="card-body">
						<h5 className="card-title">Ваш заказ</h5>
						{!cardPay.length && (<div data-cart-empty className="alert alert-secondary" role="alert">
							Корзина пуста
						</div>)}
						{/* {<!-- cart-wrapper -->} */}
						<div className="cart-wrapper">

							{/* {<!-- Cart item -->} */}
							{rollItems.map(roll => (
								<SmallCard 
									key={roll.imgName}
									rollItem={roll}
									setPay={setPay}
									initialsPayments={cardPay}
									selectRoll={selectRoll}
								/>
							))}
							{/* {<!-- // Cart item -->} */}

						{/* {<!-- // cart-wrapper -->} */}

						{/* {<!-- Стоимость заказа -->} */}
						<div className="cart-total">
							<p><span className="h5">Доставка:</span> <span className="delivery-cost free">бесплатно</span> </p>
							<p><span className="h5">Итого:</span> <span className="total-price">
								{cardPay.reduce((sum, pay) =>  sum + (pay.counter * pay.price), 0)}
							</span> <span className="rouble">грн</span></p>
						</div>
						{/* {<!-- // Стоимость заказа -->} */}

					</div>

					{/* {<!-- Оформить заказ -->} */}
					<div id="order-form" className="card-body border-top">
						<h5 className="card-title">Оформить заказ</h5>
						<form>
							<div className="form-group">
								<input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Ваш номер телефона"
                                ></input>
							</div>
							<button type="submit" className="btn btn-primary">Заказать</button>
						</form>
					</div>
                    {/* oformit zakaz */}
				</div>
                </div>
                </div>
    )
}