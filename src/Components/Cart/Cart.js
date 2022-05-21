import React, { useEffect, useState } from 'react';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import Modal from 'react-bootstrap/Modal';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    const [pickedPerfume, setPickedPerfume] = useState([]);
    console.log("cart:", cart);
    const [randomItem, setRandomItem] = useState("");


    //console.log(list);
    useEffect(() => {
        let cartItem = [];
        for (const product of cart) {
            cartItem = [...pickedPerfume, product.products];
            setPickedPerfume(cartItem);

        }

    }, [cart])
    const deleteCart = () => {
        let list = [];
        setPickedPerfume(list)
        setRandomItem(list);
    }
    const handleRandomSelection = () => {
        let index = pickedPerfume.length - 1;
        let stepOne = index;
        let stepTwo = Math.random() * stepOne;
        let result = Math.floor(stepTwo)
        console.log(pickedPerfume[result].brand);
        setRandomItem(pickedPerfume[result].brand)
        console.log("String", randomItem);

    }

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="container">
                        <h4>Selected Perfume</h4>
                        {pickedPerfume.map(item => <SelectedProduct key={item.id} item={item}></SelectedProduct>)}
                        <button className="me-1 reset-btn" onClick={deleteCart}>Reset</button>
                        <button className="choose-btn" onClick={handleRandomSelection}>Choose 1 Item</button>
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>{randomItem}</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <h5> <span style={{ color: "orange" }}>Randomly Selected Item</span> Will Appear Here.</h5>
                            </Modal.Body>


                        </Modal.Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;