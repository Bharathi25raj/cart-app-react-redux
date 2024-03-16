import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { addToCart } from "../Store/cartSlice";


export default function ProductCard(){

    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setProducts(res.data);
        })
    })

    function handleAddToCart(product) {
        dispatch(addToCart(product));
    }

    return (
        <div className="products">
            {
                products.map((product) => {
                    return (
                        <div key={product.id} className="productCard">
                            <img className="productImage" src={product.image} alt="product_image"/>
                            <p className="productTitle">{product.title}</p>
                            <p className="productPrice">{product.price}$</p>
                            <button className="btn addToCartBtn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}