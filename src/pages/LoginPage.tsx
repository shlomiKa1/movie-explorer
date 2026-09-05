import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!userName.trim()) return;

    localStorage.setItem("user", userName);

    const from = (location.state as { from?: string })?.from || "/";
    navigate(from, { replace: true });
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          placeholder="Enter user name"
          onChange={(e) => setUserName(e.target.value)}
        />

        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
