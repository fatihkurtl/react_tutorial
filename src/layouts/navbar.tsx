import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth";
import { ThemeMode } from "../composables/theme/theme_mode";

const Navbar = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const handleLogout = () => {
    dispatch(logout());
  };

  const { darkMode, toggleDarkMode } = ThemeMode();

  return (
    <nav className="bg-gray-400 p-4 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white text-xl font-bold">
            Home
          </Link>
          <Link to="/blog" className="ml-4 text-white">
            Blog
          </Link>
          {isAuthenticated && token && (
            <Link to="/profile" className="ml-4 text-white">
              Profile
            </Link>
          )}
          {!isAuthenticated && !token && (
            <Link to="/register" className="ml-4 text-white">
              Register
            </Link>
          )}
        </div>
        <div className="flex items-center justify-end ml-auto">
          <button
            onClick={toggleDarkMode}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
        <div className="flex items-center">
          {!isAuthenticated && !token && (
            <Link
              to="/login"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2"
            >
              Login
            </Link>
          )}
          {isAuthenticated && token && (
            <button
              onClick={handleLogout}
              className="ml-4 text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded-md dark:bg-red-600 dark:hover:bg-red-800"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
