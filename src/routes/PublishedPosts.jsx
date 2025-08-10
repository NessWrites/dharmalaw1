import React, { useState, useEffect } from "react";
import Header from "../components/header/Header.jsx";
import "../css/sections/PublishedPosts.css";

const samplePosts = [
  { id: 1, title: "AI in Healthcare", category: "Civil Law", content: "Exploring AI's role in hospitals...", date: "2025-08-01" },
  { id: 2, title: "Healthy Lifestyle Tips", category: "Family Law", content: "Daily habits for a better life...", date: "2025-07-15" },
  { id: 3, title: "Space Exploration Updates", category: "Civil Law", content: "Latest from NASA missions...", date: "2025-07-20" },
  { id: 4, title: "Advancements in Quantum Computing", category: "Labor Law", content: "Breakthrough in qubits...", date: "2025-07-30" },
];

const categories = [
  "All",
  "Civil Law",
  "Family Law",
  "Commercial Law",
  "Labor Law",
  "Real E-state Law",
  "Personal Data Protection Law",
];

export default function PublishedPosts() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(samplePosts);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(samplePosts);
    } else {
      setFilteredPosts(samplePosts.filter((post) => post.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <>
      <Header showMenu={showMenu} onToggleMenu={toggleMenu} showLogo={false} className="published-posts-menu" />
      <main className="published-posts-main">
        <h1 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '2rem', color: '#212529' }}>Published Posts</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'stretch' }} className="md:flex-row md:gap-12 md:items-start md:flex">
          {/* Filter Bar */}
          <section style={{ flex: 1, maxWidth: 300 }}>
            <div className="filterBar" style={{ marginBottom: 24 }}>
              <label htmlFor="category" style={{ fontWeight: 500, fontSize: '1rem', color: '#212529', marginBottom: 8, display: 'block' }}>Sort by Category:</label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', background: '#f9f9f9', fontSize: '1rem' }}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </section>
          {/* Posts Grid */}
          <section style={{ flex: 3 }}>
            <div className="postsGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', padding: 0 }}>
              {filteredPosts.map((post) => (
                <div key={post.id} className="card" style={{ background: 'linear-gradient(180deg, #ffffff, #f9f9f9)', borderRadius: 16, padding: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.2s', cursor: 'pointer', position: 'relative', zIndex: 2 }}>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>{post.title}</h2>
                  <p className="category" style={{ fontSize: '0.9rem', fontWeight: 500, color: '#0d6efd', marginBottom: '1rem' }}>{post.category}</p>
                  <p className="content" style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>{post.content}</p>
                  <small className="date" style={{ fontSize: '0.8rem', color: '#888' }}>{new Date(post.date).toLocaleDateString()}</small>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
