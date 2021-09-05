import React from "react";

function FruitScreen(props) {
    return <main className="FruitProducts"> 
    <div className="content">
    <ul className="Products">
        <li>
            <div className="Product"></div>
            <img src="./images/apple.jpg" className="ProductImage"/>
            <div className="ProductName">Apple</div>
            <div className="ProductPrice">10EG/kilo</div>
        </li>

        <li>
            <div className="Product"></div>
            <img src="./images/orange.jpg" className="ProductImage"/>
            <div className="ProductName">Orange</div>
            <div className="ProductPrice">20EG/kilo</div>
        </li>

        <li>
            <div className="Product"></div>
            <img src="./images/strawberry.jpeg" className="ProductImage"/>
            <div className="ProductName">Strawberry</div>
            <div className="ProductPrice">8EG/kilo</div>
        </li>

        <li>
            <div className="Product"></div>
            <img src="./images/watermelon.jpg" className="ProductImage"/>
            <div className="ProductName">Watermelon</div>
            <div className="ProductPrice">5EG/kilo</div>
        </li>

       

    </ul>
    

    </div>
 
    </main>
}

export default FruitScreen;