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

        <li>
            <div className="Product"></div>
            <img src="./images/avocado.jpg" className="ProductImage"/>
            <div className="ProductName">Avocado</div>
            <div className="ProductPrice">25EG/kilo</div>
        </li>

        <li>
            <div className="Product"></div>
            <img src="./images/cherry.jpg" className="ProductImage"/>
            <div className="ProductName">Cherry</div>
            <div className="ProductPrice">15EG/kilo</div>
        </li>

        <li>
            <div className="Product"></div>
            <img src="./images/kiwi.png" className="ProductImage"/>
            <div className="ProductName">Kiwi</div>
            <div className="ProductPrice">12EG/kilo</div>
        </li>

        <li>
            <div className="Product"></div>
            <img src="./images/mango.jpeg" className="ProductImage"/>
            <div className="ProductName">Mango</div>
            <div className="ProductPrice">15EG/kilo</div>
        </li>

       

    </ul>
    

    </div>
 
    </main>
}

export default FruitScreen;