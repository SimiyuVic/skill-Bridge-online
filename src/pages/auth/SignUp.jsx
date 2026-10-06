import { Link } from "react-router-dom";

const Signup = () => {
    return ( 
        <div>
            <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm p-4">
                            <h4>
                                Job Seekers
                            </h4>
                            <p>
                                Apply for exclusive jobs on skillBridge. <br /> Be found by employers. 
                                Analyse How much you qualify for a Job with our Ai.
                                Worry less on job-hunting
                            </p>
                            <Link className="btn btn-outline-primary btn-sm" to="/job-seeker-register">
                                Register as a JobSeeker
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm p-4">
                            <h4>
                                Employers
                            </h4>
                            <p>
                                Hire the best candidates for your open positions on MyJobMag. <br />
                                 Register, post jobs and search exclusive candidate profiles.
                            </p>
                            <Link className="btn btn-outline-dark btn-sm" to="/employer-register">
                                Register as an Employer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Signup;