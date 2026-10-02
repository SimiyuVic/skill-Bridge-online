import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";



const JobDetails = () => {

    const { id } = useParams();

    const { allData: job, loading, error } = useFetch(`http://localhost:4000/jobs/${id}`);

    return (
        <div>
            <div className="container my-3">
                {error && <div className="text-danger fw-bold"> {error} </div>}
                {loading && <div className="text-success fw-bold ">Loading Job Details . . . </div>}
                <div className="row gap-3">
                    <div className="col-md-7">
                        <div className="card border-0 shadow-sm p-4">
                            <h4>
                                {job.jobTitle}
                            </h4>
                            <h6 className="text-primary">
                                {job.companyName}
                            </h6>
                            <span className="border-bottom my-2" />
                            <div className="d-flex justify-content-between">
                                <span className="text-danger">
                                    <h6>Location</h6>
                                    <CiLocationOn /> {job.companyLocation}
                                </span>
                                <span className="text-danger">
                                    <h6>Employement Type</h6>
                                    <IoBriefcaseOutline />  {job.discretion}

                                </span>
                            </div>
                            {/* Description */}
                            <h6 className="my-3">Job Description</h6>
                            <p>
                                {job.jobDescription}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-4 border-0 shadow-sm">
                            <h4 className="p-2">
                                Interested in this job?
                            </h4>
                            <small className="text-muted p-2 mb-2">
                                Apply now and take next steps towards your career.
                            </small>
                            <Link className="btn btn-outline-primary btn-sm">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDetails;