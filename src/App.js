import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";
import React from "react";

function App() {
  const [cart, setCart] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 }
  ]);
  const [itemcount, setItemcount] = useState(0);

  const handleIncrement = (product) => {
    // cart array'inin kopyasını oluştur

    const index = cart.indexOf(product);
    // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
    cart[index] = { ...cart[index] };
    cart[index].value++;
    // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
    const itemcount = getItemCount(cart);
    // state'i güncelle
    setCart(cart);
    setItemcount(itemcount);
  };
  const handleDecrement = (product) => {
    const index = cart.indexOf(product);
    cart[index] = { ...cart[index] };
    cart[index].value--;
    const itemcount = getItemCount(cart);
    setCart(cart);
    setItemcount(itemcount);
  };
  const getItemCount = (cart) => {
    // Sepetteki toplam ürün sayısını bul
    let itemcount = cart.reduce((total, product) => total + product.value, 0);

    return itemcount;
  };

  return (
    <div className="App">
      <Navbar totalItems={itemcount} />
      <ProductsGrid
        products={products}
        cart={cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

export default App;
