import { Link } from "react-router-dom";
import arrowUp from "../graphics/arrow-up.svg";
import arrowDown from "../graphics/arrow-down.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, decreaseCart, getTotals, clearCart } from "../features/cartSlice";
import axios from "axios";

function Cart({ handleToggleModal }) {
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };

    const checkout = async (cart) => {

        try {
            const response = await axios.post("http://localhost:5000/api/beans", cart);
            dispatch(clearCart());
            navigate("/status", { state: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className="cart-modal" >
            <div className="overlay" onClick={handleToggleModal}></div>
            <div class="arrow-up"></div>
            <div className="cart-container">
                <div className="heading-cart"><h2>Din beställning</h2></div>
                {cart.cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <p>Din varukorg är för närvarande tom</p>
                        <div className="start-shopping">
                            <Link to="/menu" />
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cart.cartItems?.map(cartItem => (
                                <div className="cart-item" key={cartItem.id}>
                                    <aside className="item-info">
                                        <div className="cart-product">
                                            <h3>{cartItem.title}</h3>
                                        </div>
                                        <div className="cart-product-total-price">
                                            {cartItem.price * cartItem.cartQuantity} kr
                                        </div>
                                    </aside>
                                    <div className="cart-product-quantity">
                                        <img alt="arrowUp" src={arrowUp} onClick={() => handleAddToCart(cartItem)} />
                                        <div className="count">{cartItem.cartQuantity}</div>
                                        <img alt="arrowDown" src={arrowDown} onClick={() => handleDecreaseCart(cartItem)} />
                                    </div>
                                </div>
                            ))}
                            <div />

                        </div>

                        <div className="cart-checkout">
                            <aside className="total">
                                <div><h3>Total</h3></div>
                                <div><p>inkl moms + drönarleverans</p></div>
                            </aside>
                            <h3 className="amount">{cart.cartTotalAmount} kr</h3>
                        </div>
                        <button className="checkout-btn" onClick={() => checkout(cart)}>Take my money!</button>
                    </>
                )}
            </div>

        </div>
    );
};

export default Cart;