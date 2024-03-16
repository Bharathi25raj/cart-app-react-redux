import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../Store/cartSlice";
import { fetchProducts } from "../Store/productSlice";


export default function ProductCard(){

    const dispatch = useDispatch();
    
    const { data, status } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    function handleAddToCart(product) {
        dispatch(addToCart(product));
    }

    if(status == 'loading'){
        return (
            <h3>...Loading</h3>
        )
    } else if (status == 'error'){
        return (
            <h3>Oops, Something went wrong!</h3>
        )
    }

    return (
        <div className="products">
            {
                data.map((product) => {
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