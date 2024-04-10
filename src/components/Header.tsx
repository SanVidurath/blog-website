// Header.tsx
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="position-fixed w-100 navbar-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid mx-3">
          <Link
            to="/blog-website"
            className="navbar-brand"
            style={{ cursor: "pointer" }}
          >
            <p className="h4">HOME</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto" id="navbarNav">
            <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
              <li className="nav-item">
                <Link
                  to="/blog-website"
                  className={"nav-link"}
                  aria-current="page"
                >
                  <p className="h5">Authors</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog-website/MostLikedPosts" className={"nav-link"}>
                  <p className="h5">MostLikedPosts</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog-website/MostCommentedPosts"
                  className={"nav-link"}
                >
                  <p className="h5">MostCommentedPosts</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
