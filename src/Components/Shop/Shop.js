import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>

            <div className="container mt-5 opacity">

                <div className="row">
                    <div className="products-container col-sm-12 col-md-12 col-lg-9 mb-5">
                        <div className="row row-cols-1 row-cols-md-3  mx-auto w-100">
                            {products.map(products => <Products brand={products.brand} price={products.price} image={products.image}></Products>)}
                        </div>
                    </div>
                    <div className="cart-container col-sm-12 col-md-12 col-lg-3 mb-3">
                        <Cart></Cart>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Shop;