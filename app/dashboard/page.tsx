"use client";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [blogTypeFilter, setBlogTypeFilter] = useState("all");
  const [sortFilter, setSortFilter] = useState("latest");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        setBlogs(data);
        setFilteredBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const filtered = blogs.filter((blog) => {
      const matchesSearch = blog.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesBlogType =
        blogTypeFilter === "all" ||
        (blogTypeFilter === "my" && blog.author === "me");
      return matchesSearch && matchesBlogType;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sortFilter === "likes") {
        return b.likes - a.likes;
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });

    setFilteredBlogs(sorted);
  }, [searchQuery, blogTypeFilter, sortFilter, blogs]);

  return (
    <div className="p-4 space-y-4">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
      />

      {/* Filters */}
      <div className="flex space-x-4">
        {/* Blog Type Filter */}
        <select
          value={blogTypeFilter}
          onChange={(e) => setBlogTypeFilter(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
        >
          <option value="all">All Blogs</option>
          <option value="my">My Blogs</option>
        </select>

        {/* Sort Filter */}
        <select
          value={sortFilter}
          onChange={(e) => setSortFilter(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
        >
          <option value="latest">Latest</option>
          <option value="likes">Highest Likes</option>
        </select>
      </div>

      {/* Display Filtered Blogs */}
      <div>
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="p-4 border rounded-md shadow-sm">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}

        {filteredBlogs.length === 0 && <p>No blogs found.</p>}
      </div>
    </div>
  );
};

export default Dashboard;
