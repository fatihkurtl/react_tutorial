import { Link } from "react-router-dom";
import { blogPosts } from "../storage/database";

const BlogListComp = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-gray-800 dark:text-gray-100 text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                By {post.author} on {post.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {post.content.substring(0, 100)}...
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListComp;
