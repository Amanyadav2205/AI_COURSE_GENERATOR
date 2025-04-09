import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function Explore() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development in 2025",
      excerpt: "Exploring the latest trends in web development including AI integrations, serverless architectures, and more.",
      author: "Sarah Johnson",
      date: "March 28, 2025",
      readTime: "5 min read",
      category: "Technology",
      image: "/Ai.jpg",
    },
    {
      id: 2,
      title: "Mastering React Hooks",
      excerpt: "A comprehensive guide to using React Hooks effectively in your applications.",
      author: "Michael Chen",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "Programming",
      image: "/React.jpg",
    },
    {
      id: 3,
      title: "Designing for Accessibility",
      excerpt: "Why accessible design matters and how to implement it in your next project.",
      author: "Alex Rivera",
      date: "April 2, 2025",
      readTime: "6 min read",
      category: "Design",
      image: "/Code.jpg",
    }
  ];

  const resources = [
    { id: 1, title: "Free React Course", type: "Course", link: "#" },
    { id: 2, title: "Development Tools Guide", type: "eBook", link: "#" },
    { id: 3, title: "UX Design Patterns", type: "Resource", link: "#" },
    { id: 4, title: "Frontend Weekly", type: "Newsletter", link: "#" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div
        className="bg-blue-600 text-white py-16 rounded-lg"
        style={{
          backgroundImage: "url('/Ai.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(37, 99, 235, 0.8)"
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Explore New Ideas</h1>
          <p className="text-xl mb-8">Discover the latest blogs, resources, and insights in technology and development.</p>
          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Search for topics..."
              className="w-full py-3 px-4 rounded-lg text-gray-800"
            />
            <button className="absolute right-2 top-2 px-4 py-1 bg-blue-800 rounded-lg">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured Blogs */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{post.category}</div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {post.author} • {post.date}
                  </div>
                  <div className="text-sm text-gray-500">{post.readTime}</div>
                </div>
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-800">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sm text-blue-600 mb-2">{resource.type}</div>
                <h3 className="text-lg font-bold mb-3">{resource.title}</h3>
                <a href={resource.link} className="text-blue-600 hover:text-blue-800">
                  Access resource →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div
          className="bg-blue-50 rounded-xl p-8 text-center"
          style={{
            backgroundImage: "url('/React.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(239, 246, 255, 0.9)"
          }}
        >
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles, resources, and development tips directly in your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow rounded-l-lg px-4 py-2 border-t border-b border-l"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
