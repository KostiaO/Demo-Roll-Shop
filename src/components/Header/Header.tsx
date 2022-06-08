import React from "react";
import './Header.css';
export const Header: React.FC = () => {
    return(
        <header className="header">
            <div className="container text-center">
                <img src="../img/logo/logo.svg" width="92" alt="Суши и пицца"></img>
                <div className="display-4">Доставка роллов</div>
                <p className="lead">Оперативно и вкусно</p>
            </div>
	    </header>
    )  
}