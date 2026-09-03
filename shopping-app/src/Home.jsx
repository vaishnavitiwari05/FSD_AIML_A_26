const products = [
  {
    id: 1,
    name: "Running Shoes",
    price: 1999,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Headphones",
    price: 1499,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Backpack",
    price: 999,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 799,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Camera",
    price: 4999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80",
  },
];

const Home = () => {
  const addToCart = (product) => {
    alert(product.name + " added to cart!");
  };

  return (
    <main>
      <section className="products-section">
        <div className="section-title">
          <p>OUR PRODUCTS</p>
          <h2>Popular Products</h2>
        </div>

        <div className="product-container">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <p className="category">{product.category}</p>

                <h3>{product.name}</h3>

                <div className="product-bottom">
                  <strong>₹{product.price}</strong>

                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;