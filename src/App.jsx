import { useState } from "react";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import "./App.css";

function App() {
  const productsData = [
    {
      id: 1,
      title: "iPhone 14 Pro",
      description: "Latest Apple mobile with powerful camera",
      price: 80000,
      category: "Mobiles",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: 2,
      title: "Running Shoes",
      description: "Comfortable running sneakers for all-day wear",
      price: 2000,
      category: "Fashion",
      image:
        "https://i5.walmartimages.com/seo/Kricely-Men-s-Trail-Running-Shoes-Fashion-Walking-Hiking-Sneakers-Men-Tennis-Cross-Training-Shoe-Outdoor-Snearker-Mens-Casual-Workout-Footwear-Tie-dy_b4edf81c-4a0e-494f-ab8f-5310ea0dc80d.102205b429f8869dc851a8dc5c548ced.jpeg"
    },
    {
      id: 3,
      title: "Dell Laptop",
      description: "High-performance laptop for work and study",
      price: 60000,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80"
    }
  
  ];

  const [products] = useState(productsData);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sortOrder, setSortOrder] = useState("");

  const navLabels = [
    "SuperCoin Zone",
    "Grocery",
    "Mobiles",
    "Fashion",
    "Electronics",
    "Home",
    "Beauty",
    "Appliances"
  ];

  const filteredProducts = products
    .filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) => p.price >= minPrice && p.price <= maxPrice)
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="ecommerce-shell">
      <header className="ecommerce-header">
        <div className="ecommerce-brand">
          <span className="ecommerce-logo">E</span>
          <div>
            <strong>E-Commerce</strong>
            <small>Explore Plus</small>
          </div>
        </div>

        <div className="ecommerce-search">
          <SearchBar setSearch={setSearch} />
        </div>

        <div className="ecommerce-actions">
          <button className="btn btn-light">Login</button>
          <button className="btn btn-light">More</button>
          <button className="btn btn-yellow">Cart</button>
        </div>
      </header>

      <nav className="ecommerce-nav">
        {navLabels.map((label) => (
          <span className="nav-chip" key={label}>
            {label}
          </span>
        ))}
      </nav>

      <section className="hero-banner">
        <div className="hero-copy">
          <p className="hero-label">Big Savings on top brands</p>
          <h1>Style, Gadgets & Essentials</h1>
          <p className="hero-text">
            Discover trending products across mobiles, fashion, electronics, home and more.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Shop Now</button>
            <button className="btn btn-secondary">Best Offers</button>
          </div>
        </div>
        <div className="hero-image"></div>
      </section>

      <div className="page-body">
        <aside className="filter-panel">
          <div className="filter-card">
            <h3>Refine Results</h3>
            <Filter setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
            <Sort setSortOrder={setSortOrder} />
          </div>
          <div className="filter-card">
            <h3>Top Categories</h3>
            <div className="category-list">
              <span>Mobiles</span>
              <span>Fashion</span>
              <span>Electronics</span>
              <span>Home</span>
            </div>
          </div>
        </aside>

        <main className="product-panel">
          <div className="product-header">
            <div>
              <h2>Featured products</h2>
              <p>Best deals on electronics, fashion, and more.</p>
            </div>
            <div className="product-summary">
              {filteredProducts.length} items found
            </div>
          </div>
          <ProductList products={filteredProducts} />
        </main>
      </div>
    </div>
  );
}

export default App;
