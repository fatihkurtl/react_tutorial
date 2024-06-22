import { useParams } from "react-router-dom";
import { blogPosts } from "../storage/database";

const BlogDetailPage = () => {
  const { id = "" } = useParams<{ id: string }>();
  const postId = parseInt(id, 10);

  const post = blogPosts.find((post) => post.id === postId);

  if (!post) {
    return <div className="container mx-auto p-4">Post not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-800 dark:bg-gray-100 rounded-lg p-6 shadow-md">
        <h1 className="text-gray-100 dark:text-gray-800 text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 dark:text-gray-600 mb-4">
          By <span className="text-gray-200 dark:text-gray-400">{post.author}</span> on <span className="text-gray-200 dark:text-gray-400">{post.date}</span>
        </p>
        <div className="bg-gray-700 dark:bg-gray-200 rounded-lg p-6">
          <p className="text-gray-200 dark:text-gray-700">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
