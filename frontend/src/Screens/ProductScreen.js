import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct, saveProductReview } from '../actions/productActions';
import { PRODUCT_REVIEW_SAVE_RESET } from '../constants/productConstants';
import Rating from '../components/Rating';

function ProductScreen(props) {
    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const productDetails = useSelector((state) => state.productDetails);
    const { product, loading, error } = productDetails;
    const productReviewSave = useSelector((state) => state.productReviewSave);
    const { success: productSaveSuccess } = productReviewSave;
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (productSaveSuccess) {
        alert('Review submitted successfully.');
        setRating(0);
        setComment('');
        dispatch({ type: PRODUCT_REVIEW_SAVE_RESET });
      }
      dispatch(detailsProduct(props.match.params.id));
      return () => {
        //
      };
    }, [productSaveSuccess]);
    const submitHandler = (e) => {
      e.preventDefault();
      // dispatch actions
      dispatch(
        saveProductReview(props.match.params.id, {
          name: userInfo.name,
          rating: rating,
          comment: comment,
        })
      );
    };
    const handleAddToCart = () => {
      props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
    };
  
    return (
    <div>
        
    <div>
      <div className="back-to-result">
        <Link to="/" className="ProductBackButton" >⬅️ Back to previous</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
          <div className="ProductDetails">
            <img src={product.image} alt="ProductImage" className="ProductImage"></img>

            <div className="DetailsActions">
              <ul>
              <li>
                        <h4 className="ProductName">{product.name}</h4>
                    </li>
                <li>Price: {product.price}</li>
                <li>
                  Status:{' '}
                  {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                </li>
                <li>
                  Qty:{' '}
                  <select
                    value={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  {product.countInStock > 0 && (
                    <button
                      onClick={handleAddToCart}
                      className="button primary"
                    >
                      Add to Cart
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
      )}
    </div>

    </div>
    );
}

export default ProductScreen;