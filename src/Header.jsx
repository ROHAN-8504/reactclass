import { Link } from "react-router-dom";
import "./header.css";

function Header({ setsearchquery }) {
  const togglemode = () => {
    document.body.classList.toggle("change");
  };

  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img
          className="logo"
          src="https://zerodha.com/static/images/logo.svg"
          alt="Zerodha Logo"
        />
      </Link>

      <input
        className="search-box"
        type="text"
        placeholder="Search products..."
        onChange={(e) => setsearchquery(e.target.value)}
      />

      <nav className="nav-links">
        <Link to="/auth/register">Signup</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/auth/login">Signin</Link>

        <button onClick={togglemode}>Dark/Light</button>
      </nav>
    </header>
  );
}

export default Header;