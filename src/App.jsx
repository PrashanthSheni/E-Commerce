// import { useState } from "react";
// import ProductList from "./components/ProductList";
// import SearchBar from "./components/SearchBar";
// import Filter from "./components/Filter";
// import Sort from "./components/Sort";
// import "./App.css";

// function App() {
//   const productsData = [
//     {
//       id: 1,
//       title: "iPhone 14 Pro",
//       description: "Latest Apple mobile with powerful camera",
//       price: 80000,
//       category: "Mobiles",
//       image:
//         "data:image/webp;base64,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"
//     },
//     {
//       id: 2,
//       title: "Running Shoes",
//       description: "Comfortable running sneakers for all-day wear",
//       price: 2000,
//       category: "Fashion",
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
//     },
//     {
//       id: 3,
//       title: "Dell Laptop",
//       description: "High-performance laptop for work and study",
//       price: 60000,
//       category: "Electronics",
//       image:
//         "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800"
//     },
//     {
//       id: 4,
//       title: "Smart Watch",
//       description: "Track fitness and notifications easily",
//       price: 5000,
//       category: "Electronics",
//       image:
//         "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
//     },
//     {
//       id: 5,
//       title: "Wireless Headphones",
//       description: "Noise cancelling over-ear headphones",
//       price: 3500,
//       category: "Electronics",
//       image:
//         "data:image/webp;base64,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"
//     },
//     {
//       id: 6,
//       title: "Backpack",
//       description: "Durable travel backpack for daily use",
//       price: 1200,
//       category: "Fashion",
//       image:
//         "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800"
//     },
//     {
//       id: 7,
//       title: "Gaming Mouse",
//       description: "High precision RGB gaming mouse",
//       price: 1500,
//       category: "Electronics",
//       image:
//         "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800"
//     },
//     {
//       id: 8,
//       title: "Bluetooth Speaker",
//       description: "Portable speaker with deep bass",
//       price: 2500,
//       category: "Electronics",
//       image:
//         "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800"
//     },
//     {
//       id: 9,
//       title: "Sunglasses",
//       description: "Stylish UV protection sunglasses",
//       price: 800,
//       category: "Fashion",
//       image:
//         "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800"
//     },
//     {
//       id: 10,
//       title: "Coffee Maker",
//       description: "Automatic drip coffee machine",
//       price: 4500,
//       category: "Home",
//       image:
//         "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800"
//     }
//   ];

//   const [products] = useState(productsData);
//   const [search, setSearch] = useState("");
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(100000);
//   const [sortOrder, setSortOrder] = useState("");

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 4;

//   const navLabels = [
//     "SuperCoin Zone",
//     "Grocery",
//     "Mobiles",
//     "Fashion",
//     "Electronics",
//     "Home",
//     "Beauty",
//     "Appliances"
//   ];

//   const filteredProducts = products
//     .filter((p) =>
//       p.title.toLowerCase().includes(search.toLowerCase())
//     )
//     .filter((p) => p.price >= minPrice && p.price <= maxPrice)
//     .sort((a, b) => {
//       if (sortOrder === "low") return a.price - b.price;
//       if (sortOrder === "high") return b.price - a.price;
//       return 0;
//     });

//   // Pagination logic
//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedProducts = filteredProducts.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   const goToPage = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="ecommerce-shell">
//       <header className="ecommerce-header">
//         <div className="ecommerce-brand">
//           <span className="ecommerce-logo">E</span>
//           <div>
//             <strong>E-Commerce</strong>
//             <small>Explore Plus</small>
//           </div>
//         </div>

//         <div className="ecommerce-search">
//           <SearchBar setSearch={setSearch} />
//         </div>

//         <div className="ecommerce-actions">
//           <button className="btn btn-light">Login</button>
//           <button className="btn btn-light">More</button>
//           <button className="btn btn-yellow">Cart</button>
//         </div>
//       </header>

//       <nav className="ecommerce-nav">
//         {navLabels.map((label) => (
//           <span className="nav-chip" key={label}>
//             {label}
//           </span>
//         ))}
//       </nav>

//       <section className="hero-banner">
//         <div className="hero-copy">
//           <p className="hero-label">Big Savings on top brands</p>
//           <h1>Style, Gadgets & Essentials</h1>
//           <p className="hero-text">
//             Discover trending products across mobiles, fashion, electronics, home and more.
//           </p>
//           <div className="hero-buttons">
//             <button className="btn btn-primary">Shop Now</button>
//             <button className="btn btn-secondary">Best Offers</button>
//           </div>
//         </div>
//         <div className="hero-image"></div>
//       </section>

//       <div className="page-body">
//         <aside className="filter-panel">
//           <div className="filter-card">
//             <h3>Refine Results</h3>
//             <Filter setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
//             <Sort setSortOrder={setSortOrder} />
//           </div>
//         </aside>

//         <main className="product-panel">
//           <div className="product-header">
//             <div>
//               <h2>Featured products</h2>
//               <p>Best deals on electronics, fashion, and more.</p>
//             </div>
//             <div className="product-summary">
//               {filteredProducts.length} items found
//             </div>
//           </div>

//           <ProductList products={paginatedProducts} />

//           {/* Pagination Controls */}
//           <div className="pagination">
//             <button
//               onClick={() => goToPage(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Prev
//             </button>

//             {[...Array(totalPages)].map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => goToPage(i + 1)}
//                 className={currentPage === i + 1 ? "active" : ""}
//               >
//                 {i + 1}
//               </button>
//             ))}

//             <button
//               onClick={() => goToPage(currentPage + 1)}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;

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
        "data:image/webp;base64,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"
    },
    {
      id: 2,
      title: "Running Shoes",
      description: "Comfortable running sneakers for all-day wear",
      price: 2000,
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
    },
    {
      id: 3,
      title: "Dell Laptop",
      description: "High-performance laptop for work and study",
      price: 60000,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800"
    },
    {
      id: 4,
      title: "Smart Watch",
      description: "Track fitness and notifications easily",
      price: 5000,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
    },
    {
      id: 6,
      title: "Backpack",
      description: "Durable travel backpack for daily use",
      price: 1200,
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800"
    },
    {
      id: 7,
      title: "Gaming Mouse",
      description: "High precision RGB gaming mouse",
      price: 1500,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800"
    },
    {
      id: 8,
      title: "Bluetooth Speaker",
      description: "Portable speaker with deep bass",
      price: 2500,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800"
    },
    {
      id: 9,
      title: "Sunglasses",
      description: "Stylish UV protection sunglasses",
      price: 800,
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800"
    },
    {
      id: 10,
      title: "Coffee Maker",
      description: "Automatic drip coffee machine",
      price: 4500,
      category: "Home",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800"
    },
    {
      id: 5,
      title: "Wireless Headphones",
      description: "Noise cancelling over-ear headphones",
      price: 3500,
      category: "Electronics",
      image:
        "data:image/webp;base64,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"
    }
  ];

  const [products] = useState(productsData);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

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

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goToPage = (page) => {
    setCurrentPage(page);
  };

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
        </div>
        <div className="hero-image"></div>
      </section>

      <div className="page-body">
        <aside className="filter-panel">
          <Filter setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
          <Sort setSortOrder={setSortOrder} />
        </aside>

        <main className="product-panel">
          <div className="product-header">
            <h2>Featured Products</h2>
            <p>{filteredProducts.length} items found</p>
          </div>

          {/* ✅ PAGINATION MOVED ABOVE PRODUCTS */}
          <div className="pagination">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>

          <ProductList products={paginatedProducts} />
        </main>
      </div>
      <footer className="ecommerce-footer">
  <p>Made by Sheni Prashanth © 2026 All Rights Reserved</p>
</footer>
    </div>
  );
}

export default App;