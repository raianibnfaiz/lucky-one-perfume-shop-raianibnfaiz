import React from 'react';

const Products = (props) => {
    const { image, brand, price } = props.products;
    return (
        <div>


            <div className="col">
                <div className="card m-2">
                    <img src={image} className="card-img-top p-1" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Brand: {brand}</h5>
                        <h6 className="card-text">Price: {price}</h6>
                        <button onClick={() => props.handleAddToCart(props)}>Add To Cart</button>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Products;