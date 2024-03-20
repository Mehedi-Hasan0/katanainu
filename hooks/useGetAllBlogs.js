"use client";

import { useState, useEffect } from "react";

const useGetAllBlogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Set loading state to true while fetching data
        setLoading(true);

        // Fetch blogs data from the backend API
        const response = await fetch("/api/create-blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();

        // Update blogsData state with fetched data
        setBlogsData(data.allBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        // Set loading state to false after fetching data
        setLoading(false);
      }
    };

    // Call the fetchBlogs function when the component mounts
    fetchBlogs();
  }, []);

  // Return the blogs data and loading state
  return { blogsData, loading };
};

export default useGetAllBlogs;
