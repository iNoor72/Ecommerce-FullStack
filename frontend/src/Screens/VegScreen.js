import React from "react";
import vegetables from "../vegetables";
import {Link} from 'react-router-dom'

function VegScreen(props) {
    return <main className="VegetableProducts"> 
    <div><Link to='/' className="ProductBackButton">⬅️ Back to home screen</Link></div>
    <div className="content">
    <ul className="Products">
        {
    vegetables.products.map (product => 
                <li>
            <div className="Product"></div>
            <img src={product.image} className="ProductImage"/>
            <Link to= {'/vegetables/' + product.id} className="ProductName">{product.name}</Link>
            <div className="ProductPrice">{product.price}</div>
                </li>               
                )
        }

    </ul>
    

    </div>
 
    </main>
}

export default VegScreen;