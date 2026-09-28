import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-4">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">skill<span className="text-primary">Bridge</span> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page"  to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/all-jobs">Browse Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">For Employers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;