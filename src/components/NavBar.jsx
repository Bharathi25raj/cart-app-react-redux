import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function NavBar(){

    const items = useSelector((state) => state.cart);

    return (
        <div className="navbar">
            <span>Redux Store</span>
            <div className="navLinks">
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/cart">Cart</Link>
                <span className="cartCount">CART ITEMS: {items.length}</span>
            </div>
        </div>
    )
}