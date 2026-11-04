
const EmployerDashboard = () => {
    return (
        <div className="p-3">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Employer Dashboard</h3>
                <p className="text-muted mb-0">
                    Welcome back! Manage your job postings and candidates.
                </p>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-4">
                    <div className="border rounded-3 p-3">
                        <p className="text-muted mb-2">Posted Jobs</p>
                        <h3 className="fw-bold mb-0">--</h3>
                        <small className="text-muted">Your job listings</small>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="border rounded-3 p-3">
                        <p className="text-muted mb-2">Applicants</p>
                        <h3 className="fw-bold mb-0">--</h3>
                        <small className="text-muted">Received applications</small>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="border rounded-3 p-3">
                        <p className="text-muted mb-2">Active Jobs</p>
                        <h3 className="fw-bold mb-0">--</h3>
                        <small className="text-muted">Currently available listings</small>
                    </div>
                </div>
            </div>

            <div className="border rounded-3 p-3">
                <h5 className="fw-semibold mb-2">Quick Overview</h5>
                <p className="text-muted mb-3">
                    Keep your listings updated and review applications to find
                    suitable candidates for your opportunities.
                </p>

                <div className="d-flex flex-wrap gap-2">
                    <a
                        href="/employer/post-job"
                        className="btn btn-sm text-white"
                        style={{ backgroundColor: "#3368A0" }}
                    >
                        Post a Job
                    </a>

                    <a
                        href="/employer/applicants"
                        className="btn btn-sm btn-outline-secondary"
                    >
                        View Applicants
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EmployerDashboard;
