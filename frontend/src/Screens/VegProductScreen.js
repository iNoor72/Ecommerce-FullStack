import React from "react";
import vegetables from "../vegetables";
import { Link } from "react-router-dom";

function VegProductScreen(props) {
    const product = vegetables.products.find(veg => veg.id == props.match.params.id)

    return <div>
    <div><Link to='/vegetables' className="ProductBackButton">⬅️ Back to vegetables screen</Link></div>

    <div className="ProductDetails">
        <div>
        <img src={product.image} alt="ProductImage" className="ProductImage"></img>
        </div>
        <div className="InfoList">
            <ul>
                <li>
                    <h4 className="ProductName">{product.name}</h4>
                </li>
                <li>
                    <p className="ProductPrice">{product.price}</p>
                </li>
            </ul>
        </div>
        <div className="DetailsActions">
            <ul>
                <li>
                    Price: {product.price}
                </li>

                <li>
                    Status: InStock
                </li>

                <li>
                    Qty: <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </li>

                <li>
                <Link to="/cart" className="CartButton">Add to Cart</Link>
                </li>
            </ul>
            
        </div>

    </div>

    </div>

}

export default VegProductScreen;