
const AdminDashboard = () => {
    return (
        <div className="p-3">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Dashboard</h3>
                <p className="text-muted mb-0">
                    Welcome back, Admin. Here's an overview of SkillBridge.
                </p>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-4">
                    <div className="p-3 border rounded-3">
                        <p className="text-muted mb-2">Total Jobs</p>
                        <h3 className="fw-bold mb-0">--</h3>
                        <small className="text-muted">Posted opportunities</small>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-3 border rounded-3">
                        <p className="text-muted mb-2">Employers</p>
                        <h3 className="fw-bold mb-0">--</h3>
                        <small className="text-muted">Registered companies</small>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-3 border rounded-3">
                        <p className="text-muted mb-2">Job Seekers</p>
                        <h3 className="fw-bold mb-0">--</h3>
                        <small className="text-muted">Registered candidates</small>
                    </div>
                </div>
            </div>

            <div className="border rounded-3 p-3">
                <h5 className="fw-semibold mb-3">Quick Overview</h5>
                <p className="text-muted mb-0">
                    Manage posted jobs, review registered employers, monitor
                    job seekers, and keep your platform running smoothly.
                </p>
            </div>
        </div>
    );
}

export default AdminDashboard;