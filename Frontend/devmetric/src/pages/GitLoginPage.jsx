import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";

function LoginPage() {
  const [users, setUsers] = useState([]);

  const API_URL_BASE = "http://127.0.0.1:8000";

  // Fetch users from backend (optional, just for display)
  useEffect(() => {
    fetch(`${API_URL_BASE}/user`) // adjust endpoint if needed
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched users:", data);
        setUsers(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // Redirect user to GitHub OAuth login
  const handleGithubLogin = () => {
    window.location.href = `${API_URL_BASE}/auth/github/login`;
  };

  return (
    <NavBar></NavBar>
  );
}

export default LoginPage;
