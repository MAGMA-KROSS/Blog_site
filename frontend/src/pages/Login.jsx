import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./sign.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await login(credentials);
      alert("Logged in successfully!");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[500px] rounded-2xl shadow-[0_0_20px_5px_rgba(0,0,0,0.2)]">
        <h1 className="text-center text-4xl mt-3">Login</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="flex flex-col p-5" onSubmit={handleLogin}>
          <input
            type="username"
            placeholder="username"
            className="p-3 rounded-lg border-2 border-amber-400 mt-5"
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg border-2 border-amber-400 mt-5"
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-amber-600 cursor-pointer hover:scale-101 text-white p-3 rounded-lg mt-5"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
