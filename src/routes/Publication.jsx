import React, { useState, useRef } from "react";
import "../css/sections/Publication.css";

export default function Publication() {
  const fixedCategories = [
    "Civil Law",
    "Family Law",
    "Commercial Law",
    "Labor Law",
    "Real Estate Law",
    "Personal Data Protection Law",
    "Others",
  ];

  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    category: fixedCategories[0],
    paragraphs: [{ id: Date.now(), title: "", text: "", image: null }],
  });

  // Refs for paragraphs (used for TOC scrolling)
  const paragraphRefs = useRef({});

  // Add paragraph
  const addParagraph = () => {
    setNewPost({
      ...newPost,
      paragraphs: [
        ...newPost.paragraphs,
        { id: Date.now(), title: "", text: "", image: null },
      ],
    });
  };

  // Update paragraph field
  const updateParagraph = (id, field, value) => {
    setNewPost({
      ...newPost,
      paragraphs: newPost.paragraphs.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      ),
    });
  };

  // Add post
  const addPost = () => {
    if (!newPost.title.trim()) return;
    setPosts([...posts, { ...newPost, id: Date.now() }]);
    setNewPost({
      title: "",
      category: fixedCategories[0],
      paragraphs: [{ id: Date.now(), title: "", text: "", image: null }],
    });
  };

  // Delete post
  const deletePost = (postId) => {
    setPosts(posts.filter((p) => p.id !== postId));
  };

  // Scroll to paragraph
  const scrollToParagraph = (postId, paraId) => {
    const ref = paragraphRefs.current[`${postId}-${paraId}`];
    if (ref && ref.scrollIntoView) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="publication-page">
      <header className="page-header">
        <h1>Publication</h1>
      </header>

      {/* New Post Form */}
      <section>
        <h2>Create New Post</h2>
        <input
          type="text"
          placeholder="Post Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />

        {/* Category Dropdown */}
        <select
          value={newPost.category}
          onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
        >
          {fixedCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Paragraph Editing */}
        {newPost.paragraphs.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <input
              type="text"
              placeholder="Paragraph Title"
              value={p.title}
              onChange={(e) => updateParagraph(p.id, "title", e.target.value)}
            />
            <textarea
              placeholder="Paragraph Content"
              value={p.text}
              onChange={(e) => updateParagraph(p.id, "text", e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                updateParagraph(p.id, "image", e.target.files[0])
              }
            />
          </div>
        ))}

        <button onClick={addParagraph}>+ Add Paragraph</button>
        <button onClick={addPost}>Add Post</button>
      </section>

      {/* Posts Display */}
      {posts.map((post) => (
        <section key={post.id}>
          <h2>{post.title}</h2>
          <p>
            <strong>Category:</strong> {post.category}
          </p>

          {/* Table of Contents */}
          <h4>Table of Contents</h4>
          <ul>
            {post.paragraphs.map((p) => (
              <li
                key={p.id}
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => scrollToParagraph(post.id, p.id)}
              >
                {p.title}
              </li>
            ))}
          </ul>

          {/* Paragraphs */}
          {post.paragraphs.map((p) => (
            <div
              key={p.id}
              ref={(el) =>
                (paragraphRefs.current[`${post.id}-${p.id}`] = el)
              }
              style={{ marginBottom: "1.5rem" }}
            >
              <h5>{p.title}</h5>
              <p>{p.text}</p>
              {p.image && (
                <img
                  src={URL.createObjectURL(p.image)}
                  alt={p.title}
                  style={{ maxWidth: "200px" }}
                />
              )}
            </div>
          ))}

          <button onClick={() => deletePost(post.id)}>Delete</button>
        </section>
      ))}
    </main>
  );
}
