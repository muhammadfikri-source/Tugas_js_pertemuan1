// src/Components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Books.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2>📚 BookSales</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
      </div>
    </nav>
  );
}

export default Navbar;
