import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top border-bottom" style={{ backgroundColor: "#fff" }}>
      <div className="container ">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" style={{ width: "30%"}} alt="Logo" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Align menu to right using ms-auto */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
