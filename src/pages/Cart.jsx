import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../Store/cartSlice";


export default function Cart() {

    const items = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    function handleRemoveBtn(itemId){
        dispatch(removeFromCart(itemId));
    }

    return (
        <div className="cart">
            {
                items.map((item) => {

                    return (
                        <div key={item.id} className="cartItem">
                            <img className="productImage" src={item.image} alt="product_image"/>
                            <p className="productTitle">{item.title}</p>
                            <p className="productPrice">{item.price}$</p>
                            <button className="btn removeFromCartBtn" onClick={() => handleRemoveBtn(item.id)}>Remove from Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}