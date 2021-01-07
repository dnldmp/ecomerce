import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productAction';

function HomeScreen(props) {
  const productList = useSelector(state =>  state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProducts())
    return () => {

    }
  }, [])
    return loading ? <div>loading...</div> : 
      error ? <div>{error}</div> : 
        <ul className="products">
              {
                products.map(product =>
                  <li key={product._id}>
                    <div className="product">
                      <Link to={`/product/${product._id}`}>
                        <img className="productImage" src={product.image} alt="product" />
                      </Link>
                      <div className="productName">
                        <Link to={`/product/${product._id}`}>{product.name}</Link>
                      </div>
                      <div className="productBrand">{product.brand}</div>
                      <div className="productPrice">${product.price}</div>
                      <div className="productRating">{product.rating} Stars ({product.numReviews} Reviews)</div>
                    </div>
                  </li>
                )
              }     
        </ul>  
}

export default HomeScreen;