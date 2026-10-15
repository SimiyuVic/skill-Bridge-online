
const JobList = () => {
    return (
        <div className="p-3">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">My Jobs</h3>
                <p className="text-muted mb-0">
                    View and manage all your posted jobs.
                </p>
            </div>

            <div className="table-responsive">
                <table className="table table-hover align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>#</th>
                            <th>Job Title</th>
                            <th>Location</th>
                            <th>Employment Type</th>
                            <th>Experience</th>
                            <th>Deadline</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td colSpan="7" className="text-center py-5">
                                <h6 className="fw-semibold">No jobs available</h6>
                                <p className="text-muted small mb-0">
                                    Your posted jobs will appear here.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default JobList;