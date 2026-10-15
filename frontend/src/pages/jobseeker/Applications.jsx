const JobSeekerApplications = () => {
    return (
        <div className="p-3">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">My Applications</h3>
                <p className="text-muted mb-0">
                    Track the jobs you have applied for and their application status.
                </p>
            </div>

            <div className="table-responsive">
                <table className="table table-hover align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>#</th>
                            <th>Job Title</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Date Applied</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td colSpan="6" className="text-center py-5">
                                <h6 className="fw-semibold">No applications yet</h6>
                                <p className="text-muted small mb-0">
                                    Jobs you apply for will appear here.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default JobSeekerApplications;