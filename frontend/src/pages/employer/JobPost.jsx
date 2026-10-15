
const JobPost = () => {
    return (
        <div className="p-3">
            <div className="mb-4">
                <h3 className="fw-bold mb-1">Post a Job</h3>
                <p className="text-muted mb-0">
                    Create a job opportunity for candidates on SkillBridge.
                </p>
            </div>

            <form>
                <div className="border rounded-3 p-3">
                    <div className="mb-3">
                        <label className="form-label">Job Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. Frontend Developer"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. Nairobi, Kenya"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Employment Type</label>
                        <select className="form-select" defaultValue="">
                            <option value="" disabled>Select employment type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                            <option value="Temporary">Temporary</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Job Description</label>
                        <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Describe the role and responsibilities..."
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Requirements</label>
                        <textarea
                            className="form-control"
                            rows="4"
                            placeholder="List the required skills and qualifications..."
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Required Experience</label>
                        <select className="form-select" defaultValue="">
                            <option value="" disabled>Select experience level</option>
                            <option value="No experience">No experience</option>
                            <option value="Less than 1 year">Less than 1 year</option>
                            <option value="1-2 years">1-2 years</option>
                            <option value="3-5 years">3-5 years</option>
                            <option value="5+ years">5+ years</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Application Deadline</label>
                        <input
                            type="date"
                            className="form-control"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn text-white px-4"
                        style={{ backgroundColor: "#3368A0" }}
                    >
                        Publish Job
                    </button>
                </div>
            </form>
        </div>
    );
}

export default JobPost;