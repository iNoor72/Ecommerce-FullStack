import fruits from "../fruits";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function FruitScreen(props) {

    const [searchKeyword, setSearchKeyword] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const category = props.match.params.id ? props.match.params.id : '';
    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(listProducts('fruits'));
  
      return () => {
        //
      };
    }, [category]);
  
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(listProducts(category, searchKeyword, sortOrder));
    };
    const sortHandler = (e) => {
      setSortOrder(e.target.value);
      dispatch(listProducts(category, searchKeyword, sortOrder));
    };
  

    return <main className="FruitProducts"> 
    <div><Link to='/' className="ProductBackButton">⬅️ Back to home screen</Link></div>
    <div className="content">
    <ul className="Products">
        {
            products.map (product => 
                <li>
            <div className="Product"></div>
            <img src={product.image} className="ProductImage"/>
            <Link to= {'/product/' + product._id} className="ProductName">{product.name}</Link>
            <div className="ProductPrice">{product.price}</div>
                </li>
                )
        }
    </ul>
    </div>
 
    </main>
}

export default FruitScreen;