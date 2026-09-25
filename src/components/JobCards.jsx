import { CiLocationOn } from "react-icons/ci";

const JobCard = ({ allJobs }) => {
    return (
        <div>
            <div className="row mt-2">
                {
                    allJobs.map((job) => (
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
                                {/* Tital and discretion */}
                                <div className="d-flex justify-content-between">
                                    <h5 className="fw-bold mb-1">
                                        {job.jobTitle}
                                    </h5>
                                    <span className="fw-bold text-danger">
                                        {job.discretion}
                                    </span>
                                </div>
                                {/* Location */}
                                <p className="text-muted mb-2">
                                    <CiLocationOn /> {job.companyLocation}
                                </p>
                                {/* Company */}
                                <h6 className="text-primary fw-semibold mb-3">
                                    {job.companyName}
                                </h6>
                                {/* Description */}
                                <p>
                                    {job.jobDescription.slice(0, 100)} ....
                                </p>
                                {/* Footer */}
                                <div className="d-flex border-top justify-content-between align-items-center mt-3 pt-3">
                                    <small>View Opportunity</small>
                                    <button className="btn btn-primary btn-sm rounded-pill px-3">More Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default JobCard;