import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Products.css";
const Products = (props) => {
    const { image, brand, price } = props.products;
    return (
        <div>


            <div className="col">
                <div className="card " m-2>
                    <img src={image} className="card-img-top p-1" alt="..." />
                    <div className="card-body card-perfume-body">
                        <h5 className="card-title">Brand: {brand}</h5>
                        <h6 className="card-text">Price: {price}</h6>
                        <button onClick={() => props.handleAddToCart(props)} className="btn-cart ">
                            <p className="btn-text">Add To Cart</p> <FontAwesomeIcon icon={faShoppingCart} />
                        </button>

                    </div>




                </div>
            </div>



        </div>
    );
};

export default Products;