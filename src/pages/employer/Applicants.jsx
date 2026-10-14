const Applicants = () => {
    return (
        <div className="p-3">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Applicants</h3>
                <p className="text-muted mb-0">
                    Review candidates who have applied for your jobs.
                </p>
            </div>

            <div className="table-responsive">
                <table className="table table-hover align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>#</th>
                            <th>Applicant Name</th>
                            <th>Job Title</th>
                            <th>Email</th>
                            <th>Date Applied</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td colSpan="7" className="text-center py-5">
                                <h6 className="fw-semibold">No applications yet</h6>
                                <p className="text-muted small mb-0">
                                    Applications for your posted jobs will appear here.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Applicants;