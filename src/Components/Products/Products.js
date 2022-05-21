import React from 'react';

const Products = (props) => {
    const { image, brand, price } = props;
    return (
        <div>


            <div className="col">
                <div className="card m-2">
                    <img src={image} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Brand: {brand}</h5>
                        <h6 className="card-text">Price: {price}</h6>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Products;