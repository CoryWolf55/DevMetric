import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {


    const toLogin = (e) => {
    e.preventDefault();
    navigate("/loginpage");
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          DevMetric
        </a>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/products">Null</a>
          </li>
          <li>
            <a href="/about">Null</a>
          </li>
          <li>
            <a href="/contact">Null</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <form onSubmit={toLogin}>
          <div className="button-container">
            <button type="submit" className="button">Get Started Free</button>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
