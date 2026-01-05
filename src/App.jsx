import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import "./styles.css";

const ProductCard = memo(({ product, onAddToCart }) => {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-img"
      />
      <div className="card-details">
        <h3>{product.title}</h3>
        <span className="category-tag">{product.category}</span>
        <div className="price-row">
          <p className="price">${product.price}</p>
          <p className={`status ${isOutOfStock ? "out" : "in"}`}>
            {isOutOfStock ? "Out of Stock" : "In Stock"}
          </p>
        </div>
        <button
          disabled={isOutOfStock}
          className="add-btn"
          onClick={() => onAddToCart(product)}
        >
          {isOutOfStock ? "Unavailable" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
});

const Cart = ({ cartItems, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return <div className="cart-empty">Empty cart</div>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart ({cartItems.length})</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="cart-item">
            <span>{item.title}</span>
            <div className="cart-actions">
              <span className="cart-price">${item.price}</span>
              <button className="remove-btn" onClick={() => onRemove(index)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [showCart, setShowCart] = useState(false);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} added!`);
  }, []);

  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((_, index) => index !== indexToRemove)
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <div className="App">
      <header className="header">
        <h1>Mini Shop</h1>
        <button
          className="cart-toggle-btn"
          onClick={() => setShowCart(!showCart)}
        >
          {showCart ? "Close Cart" : `Cart (${cart.length})`}
        </button>
      </header>

      <div className="main-layout">
        <div className={`product-section ${showCart ? "shrunk" : ""}`}>
          <input
            type="text"
            placeholder="Search products..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {loading ? (
            <p>Loading products...</p>
          ) : filteredProducts.length === 0 ? (
            <div className="no-products">No products found</div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          )}
        </div>

        {showCart && (
          <aside className="cart-sidebar">
            <Cart cartItems={cart} onRemove={removeFromCart} />
          </aside>
        )}
      </div>
    </div>
  );
}
