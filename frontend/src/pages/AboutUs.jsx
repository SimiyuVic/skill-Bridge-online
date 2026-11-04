
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center g-4">

                <div className="col-md-6">
                    <span className="badge rounded-pill text-bg-dark p-3 my-3">
                        About Us
                    </span>

                    <h2 className="fw-bold">
                        About Skill<span className="text-primary">Bridge</span>
                    </h2>

                    <p className="text-muted lh-lg my-3">
                        Welcome to SkillBridge, your trusted partner in
                        navigating the modern employment landscape. Our
                        platform connects job seekers with employment
                        opportunities and helps employers find the right
                        talent through a simple and user-friendly experience.
                    </p>

                    <Link
                        className="btn btn-primary rounded-pill px-4"
                        to="/signup"
                    >
                        Get Started <FaArrowRight className="ms-2" />
                    </Link>

                    <hr className="my-4" />

                    <div className="row g-3">
                        <div className="col-6">
                            <h3 className="fw-bold text-primary">95%</h3>
                            <p className="text-muted">
                                Applicant satisfaction goal
                            </p>
                        </div>

                        <div className="col-6">
                            <h3 className="fw-bold text-primary">350+</h3>
                            <p className="text-muted">
                                Employers and opportunities goal
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <img
                        src="images/about-us.jpg"
                        alt="About SkillBridge"
                        className="img-fluid rounded-4 shadow-sm"
                    />
                </div>
            </div>

            {/* Our Promise */}
            <div className="my-5">
                <div
                    className="card border-0 shadow-sm p-4 p-md-5 text-light"
                    style={{ backgroundColor: "#3B7597" }}
                >
                    <h2 className="fw-bold mb-4">Our Promise</h2>

                    <div className="row g-4">
                        <div className="col-md-6">
                            <h5 className="fw-bold">Employers</h5>
                            <p className="lh-lg">
                                We help employers reach talented candidates,
                                publish job openings, and simplify the
                                recruitment process.
                            </p>
                        </div>

                        <div className="col-md-6">
                            <h5 className="fw-bold">Job Seekers</h5>
                            <p className="lh-lg">
                                We help job seekers discover opportunities,
                                explore career paths, and take the next step
                                toward their professional goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;