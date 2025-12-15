import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn","false"); // or set to "false"
    navigate("/login"); // redirect after logout
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MockTest</h1>

      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>

        <li>
          <Link to="/examslist" className="hover:underline">Exams</Link>
        </li>

        <li>
          {loggedInStatus ? (
            <button
              onClick={handleLogout}
              className="hover:underline"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
