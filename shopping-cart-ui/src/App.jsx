import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Ratting from "./components/Ratting";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  

  return ( 
    <>
    <Header />
    <div className="container">
      <h1 className="title">🛒 Product Catolog</h1>
      <ProductList  />
      <Ratting feedbackMessages={[
        '😡 Hate it',
        '😕 Dislike it',
        '😐 Meh',
        '😊 Like it', 
        '🤩 Love it'
      ]}/>
      <Footer />
    </div>
    
  </>

   );
}
 
export default App;
