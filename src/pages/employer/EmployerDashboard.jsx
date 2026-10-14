import { Link } from "react-router-dom";
import { MdWork, MdPeople, MdAddCircleOutline } from "react-icons/md";

const EmployerDashboard = () => {
    return (
        <div className="p-3">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Employer Dashboard</h3>
                <p className="text-muted mb-0">
                    Welcome back! Manage your job postings and applicants.
                </p>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-6">
                    <div className="border rounded-3 p-3 d-flex align-items-center gap-3">
                        <div
                            className="rounded-3 p-3"
                            style={{ backgroundColor: "#E8F0F8", color: "#3368A0" }}
                        >
                            <MdWork size={28} />
                        </div>

                        <div>
                            <p className="text-muted mb-1">My Jobs</p>
                            <h4 className="fw-bold mb-0">--</h4>
                            <small className="text-muted">Total posted jobs</small>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="border rounded-3 p-3 d-flex align-items-center gap-3">
                        <div
                            className="rounded-3 p-3"
                            style={{ backgroundColor: "#E8F5EE", color: "#27804A" }}
                        >
                            <MdPeople size={28} />
                        </div>

                        <div>
                            <p className="text-muted mb-1">Applicants</p>
                            <h4 className="fw-bold mb-0">--</h4>
                            <small className="text-muted">Received applications</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border rounded-3 p-3 mb-4">
                <h5 className="fw-semibold mb-2">Quick Actions</h5>
                <p className="text-muted mb-3">
                    What would you like to do today?
                </p>

                <div className="d-flex flex-wrap gap-2">
                    <Link
                        to="/employer/create-job"
                        className="btn btn-sm text-white"
                        style={{ backgroundColor: "#3368A0" }}
                    >
                        <MdAddCircleOutline size={18} className="me-1" />
                        Post a Job
                    </Link>

                    <Link
                        to="/employer/jobs"
                        className="btn btn-sm btn-outline-secondary"
                    >
                        <MdWork size={18} className="me-1" />
                        Manage Jobs
                    </Link>

                    <Link
                        to="/employer/applicants"
                        className="btn btn-sm btn-outline-secondary"
                    >
                        <MdPeople size={18} className="me-1" />
                        View Applicants
                    </Link>
                </div>
            </div>

            <div className="border rounded-3 p-3">
                <h5 className="fw-semibold mb-2">Getting Started</h5>
                <p className="text-muted mb-0">
                    Post your first job, keep your company information updated,
                    and review applications as candidates apply.
                </p>
            </div>
        </div>
    );
}

export default EmployerDashboard;