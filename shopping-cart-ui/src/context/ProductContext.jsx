import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();
export function ProductProvider({children}){
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { 
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://697405a7b5f46f8b5828ba3f.mockapi.io/api/v1/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        console.log(data);
        setProducts(data)
      } catch (err) {
        setError(err.message);
      } finally{
        setLoading(false);
      }
    }

    fetchProducts();


   }, [])

   return(
    <ProductContext.Provider value={{products, loading, error}}>
        {children}
    </ProductContext.Provider>
   )
}