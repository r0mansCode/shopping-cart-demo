import React, {useState} from 'react';
import './App.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState( [] );
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [products] = useState ([
    {
      name: 'AA Battery',
      cost: '2.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEz_Zg2cX3mcOCpMOKTCWQldGAf4hbTf0qpA&usqp=CAU',
    },
    {
      name: 'Blanket',
      cost: '11.99',
      image: 'data:image/jpeg;base64,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',
    }
  ])

  const addToCart = (product) => {
    setCart([...cart, { ...product}]);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
    cart.filter((product) => product !== productToRemove)
    );
  };

  const renderProducts = () => (
    <>
      <h1>Products</h1>
      <div className="products">
      {products.map((product, idx) => (
        <div className="product" key={idx}>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image} alt={product.name} />
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
      ))}
      </div>
      </>
  );

  const renderCart = () => 
    <>
    <h1>Cart</h1>
    <div className="products">
    {cart.map((product, idx) => (
      <div className="product" key={idx}>
      <h3>{product.name}</h3>
      <h4>{product.cost}</h4>
      <img src={product.image} alt={product.name} />
      <button onClick={() => removeFromCart(product)}>Remove</button>

    </div>
    ))}
    </div>
    </>
  

  return (
    <div className="App">
      <header>
      <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart ({cart.length})</button>
      <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
