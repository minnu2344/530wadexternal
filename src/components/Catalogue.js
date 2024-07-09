import React from 'react';
import './Catalogue.css';

function Catalogue() {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description for product 1' },
    { id: 2, name: 'Product 2', description: 'Description for product 2' },
    { id: 3, name: 'Product 3', description: 'Description for product 3' },
  ];

  return (
    <div>
      <h2>Catalogue</h2>
      <div className="catalogue-grid">
        {products.map(product => (
          <div key={product.id} className="catalogue-card">
            <img src="dummy.jpg" alt="Product" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
