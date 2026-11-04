
const Applicants = () => {
    return (
        <div className="p-3">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Applicants</h3>
                <p className="text-muted mb-0">
                    Review candidates who have applied for your jobs.
                </p>
            </div>

            <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
                <div>
                    <h5 className="fw-semibold mb-1">All Applicants</h5>
                    <small className="text-muted">
                        Manage applications and review potential candidates.
                    </small>
                </div>

            </div>

            <div className="border rounded-3 p-4 text-center">
                <h6 className="fw-semibold">No applications to display yet</h6>
                <p className="text-muted mb-0">
                    Candidates who apply for your posted jobs will appear here.
                </p>
            </div>
        </div>
    );
};

export default Applicants;