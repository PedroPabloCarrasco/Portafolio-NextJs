import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div className="container">
      <Link href="/" className="navbar-brand">
        PortFolio
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">

        <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/github" className="nav-link">
              GitHub
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/behance" className="nav-link">
              Behance
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
