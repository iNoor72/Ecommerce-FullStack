import React from "react";
import fruits from "../fruits";
import {Link} from 'react-router-dom'

function FruitScreen(props) {
    return <main className="FruitProducts"> 
    <div><Link to='/' className="ProductBackButton">⬅️ Back to home screen</Link></div>
    <div className="content">
    <ul className="Products">
        {
            fruits.products.map (product => 
                <li>
            <div className="Product"></div>
            <img src={product.image} className="ProductImage"/>
            <Link to= {'/fruits/' + product.id} className="ProductName">{product.name}</Link>
            <div className="ProductPrice">{product.price}</div>
                </li>
                )
        }
    </ul>
    </div>
 
    </main>
}

export default FruitScreen;