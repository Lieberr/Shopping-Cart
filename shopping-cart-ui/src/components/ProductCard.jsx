import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({product}) => {
     const { addToCart } = useContext(CartContext)

    return ( 
            <div className="card" >
            <img className="image-product" alt={product.name} src={product.image}/>

            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>

            <button className="btn-add" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
     );
}
 
export default ProductCard;