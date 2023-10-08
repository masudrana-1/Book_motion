import GoogleLogin from "@leecheuk/react-google-login";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useToasts } from "react-toast-notifications";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
//   const { addToast } = useToasts();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate password and confirm password
    if (password !== confirmPassword) {
    //   addToast("Passwords do not match. Please try again.", { appearance: "error" });
      return;
    }

    // Simulate signup logic, replace with actual signup logic
    // Here, you can send the signup data to your backend API
    console.log("Signup data:", { username, email, password });

    // addToast("Signup successful!", { appearance: "success" });

    // Reset form fields after successful signup
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };


  const responseGoogle = (response: string) => {
    console.log(response);
  }


  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
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
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 flex items-center justify-center">
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Sign Up with Google"
            // onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        {/* Already have an account? Login link */}
        <div className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-indigo-500">Please login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
