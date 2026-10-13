const Employers = () => {
    return (
        <div className="p-3">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Employers</h3>
                <p className="text-muted mb-0">
                    Manage registered companies and their accounts.
                </p>
            </div>

            <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
                <div>
                    <h5 className="fw-semibold mb-1">All Employers</h5>
                    <small className="text-muted">
                        View and manage employer details.
                    </small>
                </div>

                <button className="btn btn-sm text-white"
                    style={{ backgroundColor: "#133458" }}>
                    View Employers
                </button>
            </div>

            <div className="border rounded-3 p-4 text-center">
                <h6 className="fw-semibold">No employer details displayed yet</h6>
                <p className="text-muted mb-0">
                    Registered employers will appear here once connected to your data.
                </p>
            </div>
        </div>
    );
}

export default Employers;