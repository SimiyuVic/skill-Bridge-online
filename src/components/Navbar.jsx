
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
            <div className="container">

                {/* Logo */}
                <Link
                    className="navbar-brand fw-bold fs-4"
                    to="/"
                >
                    skill<span className="text-primary">Bridge</span>
                </Link>

                {/* Mobile Toggle */}
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

                {/* Navigation */}
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav mx-auto gap-lg-2">

                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link fw-medium ${isActive
                                        ? "text-primary fw-bold"
                                        : "text-dark"
                                    }`
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link fw-medium ${isActive
                                        ? "text-primary fw-bold"
                                        : "text-dark"
                                    }`
                                }
                                to="/all-jobs"
                            >
                                Browse Jobs
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link fw-medium ${isActive
                                        ? "text-primary fw-bold"
                                        : "text-dark"
                                    }`
                                }
                                to="/employers"
                            >
                                For Employers
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link fw-medium ${isActive
                                        ? "text-primary fw-bold"
                                        : "text-dark"
                                    }`
                                }
                                to="/about-us"
                            >
                                About Us
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link fw-medium ${isActive
                                        ? "text-primary fw-bold"
                                        : "text-dark"
                                    }`
                                }
                                to="/contact-us"
                            >
                                Contact Us
                            </NavLink>
                        </li>

                    </ul>

                    {/* Right Side Buttons */}

                    <Link
                        to="/signup"
                        className="btn  px-3 btn btn-primary"
                    >
                        Get Started
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
