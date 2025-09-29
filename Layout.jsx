import { Outlet, NavLink } from "react-router-dom";
import "./Layout.css"; // optional kalau mau pisah css khusus layout

export default function Layout() {
  return (
    <div className="layout">
      {/* Navbar */}
      <nav className="navbar">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/books" className="nav-link">
          Books
        </NavLink>
        <NavLink to="/team" className="nav-link">
          Team
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </nav>

      {/* Halaman */}
      <main className="content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 My Website</p>
      </footer>
    </div>
  );
}
