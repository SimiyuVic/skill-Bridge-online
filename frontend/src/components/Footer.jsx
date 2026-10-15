
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-dark text-light mt-5">

            {/* Main Footer */}
            <div className="container py-5">
                <div className="row g-4">

                    {/* Brand */}
                    <div className="col-md-4">
                        <h4 className="fw-bold mb-3">
                            skill<span className="text-primary">Bridge</span>
                        </h4>

                        <p className="text-secondary">
                            You need a job, we have them.
                            You need employees, we have the best pool.
                        </p>

                        <div className="d-flex gap-2 mt-4">
                            <a href="#" className="btn btn-outline-light rounded-circle">
                                <FaFacebookF />
                            </a>

                            <a href="#" className="btn btn-outline-light rounded-circle">
                                <FaTwitter />
                            </a>

                            <a href="#" className="btn btn-outline-light rounded-circle">
                                <FaLinkedinIn />
                            </a>

                            <a href="#" className="btn btn-outline-light rounded-circle">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div className="col-6 col-md-2">
                        <h6 className="fw-bold mb-3">PRODUCT</h6>

                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    Browse Jobs
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    Remote Jobs
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    Startup Jobs
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-6 col-md-2">
                        <h6 className="fw-bold mb-3">RESOURCES</h6>

                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    FAQ
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    Privacy Policy
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-6 col-md-2">
                        <h6 className="fw-bold mb-3">COMPANY</h6>

                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    About Us
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    Contact Us
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="col-6 col-md-2">
                        <h6 className="fw-bold mb-3">GET STARTED</h6>

                        <p className="text-secondary small">
                            Ready to take the next step in your career?
                        </p>

                        <button className="btn btn-primary btn-sm">
                            Find a Job
                        </button>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-top border-secondary">
                <div className="container py-3">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">

                        <p className="mb-2 mb-md-0 text-secondary small">
                            © {new Date().getFullYear()} skillBridge. All rights reserved.
                        </p>

                        <p className="mb-0 text-secondary small">
                            Connecting talent with opportunity.
                        </p>

                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;