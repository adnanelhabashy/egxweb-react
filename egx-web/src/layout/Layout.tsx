// src/components/Layout.tsx (or src/layout/Layout.tsx)
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/* Header / Navigation */}
      <header style={{ backgroundColor: "#eee", padding: "1rem" }}>
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "1rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </header>

      {/* Main Content (Nested Routes) */}
      <main style={{ flex: 1, padding: "2rem" }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#eee",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <p>© {new Date().getFullYear()} My React App</p>
      </footer>
    </div>
  );
}
