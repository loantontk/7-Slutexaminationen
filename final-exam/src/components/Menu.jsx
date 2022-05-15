import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";
import addBtn from "../graphics/add.svg";
import graphicHeader from '../graphics/graphics-header.svg';
import graphicFooter from '../graphics/graphics-footer.svg';
import Cart from './Cart';
import { useState } from "react";
import bag from "../graphics/bag.svg"

function Menu() {
    const [showModal, setShowModal] = useState(false)
    const { items: products, status } = useSelector((state) => state.products)
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const { data, error, isLoading } = useGetAllProductsQuery();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleToggleModal = () => {
        setShowModal(!showModal)
    }

    if (isLoading) return <p>Loading..</p>
    if (error) return <p>An error occured</p>
    return (
        <>
            {
                showModal ?

                    <Cart handleToggleModal={handleToggleModal} />
                    : null
            }
            <div className="menu-container">
                <img src={graphicHeader} className="graphicHeader" alt='graphicHeader' />
                <nav className="nav-bar" onClick={handleToggleModal}>

                    <div className="nav-bag " >
                        <img className="bag" src={bag} alt="bag" />
                        <span className="bag-quantity">
                            <span>{cartTotalQuantity}</span>
                        </span>
                    </div>
                </nav>

                <div class="menu">

                    <h2>Meny</h2>
                    <ul className="products">
                        {data?.menu.map(product =>
                            <li key={product.id} className="product">
                                <img className="addBtn" alt="addBtn" src={addBtn} onClick={() => handleAddToCart(product)} />
                                <aside className="product-info">
                                    <h4>{product.title} </h4>
                                    <p> {product.desc} </p>
                                </aside>
                                <div className="price">
                                    <span>{product.price} kr</span>
                                </div>
                            </li>

                        )}
                    </ul>

                </div>
                <img src={graphicFooter} className="graphicFooter" alt='graphicFooter' />
            </div >
        </>
    )
};

export default Menu;