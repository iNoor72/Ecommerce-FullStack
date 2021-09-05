import React from "react";

function VegScreen(props) {
    return <main className="VegetableProducts"> 
    <div className="content">
    <ul className="Products">
        <li>
            <div className="Product"></div>
            <img src="./images/potato.jpg" className="ProductImage"/>
            <div className="ProductName">Potato</div>
            <div className="ProductPrice">10EG/kilo</div>
        </li>

        <li>
            <div className="Product"></div>
            <img src="./images/lemon.jpg" className="ProductImage"/>
            <div className="ProductName">Lemon</div>
            <div className="ProductPrice">20EG/kilo</div>
        </li>

        <li>
            <div className="Product"></div>
            <img src="./images/onion.jpg" className="ProductImage"/>
            <div className="ProductName">Onion</div>
            <div className="ProductPrice">8EG/kilo</div>
        </li>

       

    </ul>
    

    </div>
 
    </main>
}

export default VegScreen;