import { Link } from "react-router-dom";
import { MdWorkOutline, MdOutlineDescription } from "react-icons/md";


const JobSeekerDashboard = () => {
    return (
        <div className="p-3">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">My Dashboard</h3>
                <p className="text-muted mb-0">
                    Welcome back! Find opportunities and track your applications.
                </p>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-6">
                    <div className="border rounded-3 p-3 d-flex align-items-center gap-3">
                        <div
                            className="rounded-3 p-3"
                            style={{
                                backgroundColor: "#E8F0F8",
                                color: "#3368A0"
                            }}
                        >
                            <MdWorkOutline size={28} />
                        </div>

                        <div>
                            <p className="text-muted mb-1">Available Jobs</p>
                            <h4 className="fw-bold mb-0">--</h4>
                            <small className="text-muted">
                                Explore opportunities
                            </small>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="border rounded-3 p-3 d-flex align-items-center gap-3">
                        <div
                            className="rounded-3 p-3"
                            style={{
                                backgroundColor: "#E8F5EE",
                                color: "#27804A"
                            }}
                        >
                            <MdOutlineDescription size={28} />
                        </div>

                        <div>
                            <p className="text-muted mb-1">My Applications</p>
                            <h4 className="fw-bold mb-0">--</h4>
                            <small className="text-muted">
                                Jobs you have applied for
                            </small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border rounded-3 p-3 mb-4">
                <h5 className="fw-semibold mb-2">Quick Actions</h5>
                <p className="text-muted mb-3">
                    Take the next step in your job search.
                </p>

                <div className="d-flex flex-wrap gap-2">
                    <Link
                        to="/all-jobs"
                        className="btn btn-sm text-white"
                        style={{ backgroundColor: "#3368A0" }}
                    >
                        <MdWorkOutline size={18} className="me-1" />
                        Browse Jobs
                    </Link>

                    <Link
                        to="/job-seeker/applications"
                        className="btn btn-sm btn-outline-secondary"
                    >
                        <MdOutlineDescription size={18} className="me-1" />
                        My Applications
                    </Link>
                </div>
            </div>

            <div className="border rounded-3 p-3">
                <h5 className="fw-semibold mb-2">Job Search Tips</h5>
                <p className="text-muted mb-0">
                    Check new opportunities regularly, apply for jobs that match
                    your skills, and keep track of your application progress.
                </p>
            </div>
        </div>
    );
}

export default JobSeekerDashboard;