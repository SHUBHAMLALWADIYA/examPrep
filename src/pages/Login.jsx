import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("mockUser"));
  const loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"));

  if (!storedUser) {
    alert("No user found. Please register first.");
    navigate("/register");
    return;
  }


  if (storedUser && loginStatus) {
    alert("You Alredy Loggedin");
    navigate("/examslist");
    return;
  }else if(
    email === storedUser.email &&
    password === storedUser.password
  ) {
    localStorage.setItem("isLoggedIn", true);
    navigate("/examslist");   // 🔥 Redirect to Exam page
  } else {
    alert("Invalid email or password");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
