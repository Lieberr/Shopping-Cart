import ProductCard from "./ProductCard";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductList = () => {
    const { products, loading, error } = useContext(ProductContext)


    return ( 
        <div className="grid-container">
            {loading && <p>Loading...</p>}
            {error && <p>Failed to fetch Products</p>}
            {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))}
      </div>
     );
}
 
export default ProductList;