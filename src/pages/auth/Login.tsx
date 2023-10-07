import GoogleLogin from "@leecheuk/react-google-login";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useToasts } from "react-toast-notifications";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   const { addToast } = useToasts();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate authentication logic, replace with actual authentication logic
    if (username === "example" && password === "password") {
    //   addToast("Login successful!", { appearance: "success" });
    } else {
    //   addToast("Invalid credentials. Please try again.", { appearance: "error" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 flex items-center justify-center">
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Sign Up with Google"
            // onSuccess={responseGoogle}
            // onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        {/* Already have an account? Login link */}
        <div className="mt-4 text-center">
          Don't have an account? <Link to="/signup" className="text-indigo-500">Please signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
