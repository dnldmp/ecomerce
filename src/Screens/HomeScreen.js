import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function HomeScreen(props) {
    return (
        <ul className="products">
              {
                data.products.map(product =>
                  <li>
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
    )
}

export default HomeScreen;