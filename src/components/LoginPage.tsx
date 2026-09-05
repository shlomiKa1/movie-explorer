import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/LoginPage.css";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!userName.trim()) {
      setError("Opps, we need your user name 😏");
      return;
    }

    localStorage.setItem("user", userName);

    const from = (location.state as { from?: string })?.from || "/";
    navigate(from, { replace: true });
  }

  return (
    <div className="login-page">
      <div className="login">
        <p className="login-eyebrow">🎬 MOVIE EXPLORER</p>
        <h2 className="login-title">Sing in to continue</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="user">User name</label>
          <input
            id="userName"
            type="text"
            value={userName}
            placeholder="Enter user name"
            onChange={(e) => setUserName(e.target.value)}
          />

          <button className="btn-login">Login</button>

          {error && <p className="login-error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
