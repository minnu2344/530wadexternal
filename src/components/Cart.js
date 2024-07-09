import React from 'react';
import './Cart.css';

function Cart() {
  const cartItems = [
    { id: 1, name: 'Product 1', description: 'Description for product 1' },
    { id: 2, name: 'Product 2', description: 'Description for product 2' },
  ];

  return (
    <div>
      <h2>Cart</h2>
      <div className="cart-grid">
        {cartItems.map(item => (
          <div key={item.id} className="cart-card">
            <img src="dummy.jpg" alt="Product" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
