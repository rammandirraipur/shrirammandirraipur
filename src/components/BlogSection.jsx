import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "Ram Mandir Pran Pratishtha",
    image: "../Assets/mandir 1.jpg",
    description:
      "The historic Pran Pratishtha ceremony marked the divine beginning of a new chapter in Raipur."
  },
  {
    id: 2,
    title: "Architecture of Ram Mandir",
    image: "../Assets/mandir 2.jpg",
    description:
      "The temple architecture reflects ancient Hindu craftsmanship and spiritual symbolism."
  },
  {
    id: 3,
    title: "Places to Visit in Raipur",
    image: "../Assets/people.png",
    description:
      "Explore important spiritual places and heritage sites around Raipur."
  }
];

const BlogSection = () => {
  return (
    <section className="blog-section" id="blog">
      <h2 className="blog-title">Latest Blogs</h2>

      <div className="blog-container">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />

            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>

              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
