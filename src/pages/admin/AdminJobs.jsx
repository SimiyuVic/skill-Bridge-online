
const AdminJobs = () => {
    return (
        <div className="p-3">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Manage Jobs</h3>
                <p className="text-muted mb-0">
                    View and manage job opportunities posted on SkillBridge.
                </p>
            </div>

            <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
                <div>
                    <h5 className="fw-semibold mb-1">Posted Jobs</h5>
                    <small className="text-muted">
                        Review available opportunities and their details.
                    </small>
                </div>

                <button
                    className="btn btn-sm text-white"
                    style={{ backgroundColor: "#133458" }}
                >
                    All Jobs
                </button>
            </div>

            <div className="border rounded-3 p-4 text-center">
                <h6 className="fw-semibold">No jobs to display yet</h6>
                <p className="text-muted mb-0">
                    Posted jobs will appear here once connected to your data.
                </p>
            </div>
        </div>
    );
}

export default AdminJobs;