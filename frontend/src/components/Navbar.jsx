
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

    const loggedIn = useSelector((state) => state.auth.isLoggedIn);
    const user = useSelector((state) => state.auth.user);
    //console.log(user)

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
            <div className="container">

                <Link className="navbar-brand fw-bold fs-4" to="/">
                    skill<span className="text-primary">Bridge</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav mx-auto gap-lg-2">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/all-jobs">
                                Find Jobs
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">
                                About Us
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">
                                Contact
                            </Link>
                        </li>

                    </ul>

                    {!loggedIn ? (
                        <div className="d-flex mt-3 mt-lg-0">
                            <Link to="/signup" className="btn btn-primary px-4">
                                Get Started
                            </Link>
                        </div>
                    ) : (
                        <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">

                            <span className="fw-semibold">
                                Hi, {user?.fullname}
                            </span>

                            <Link
                                to={
                                    user?.role === "admin"
                                        ? "/admin"
                                        : user?.role === "employer"
                                        ? "/employer"
                                        : "/job-seeker"
                                }
                                className="btn btn-primary px-4"
                            >
                                View Dashboard
                            </Link>

                        </div>
                    )}

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
