import JobCards from "../components/JobCards";
import useFetch from "../hook/useFetch";

const AllJobsPage = () => {

    const { allData: jobs, error, loading  } = useFetch("http://localhost:4000/jobs");

    return ( 
        <div>
            <div className="container my-3">
                <h4 className="text-center text-muted p-2">
                    Browse All Our Jobs
                </h4>
                <div className="row">
                    <div className="col-md-3 ">
                        <h4>To be decided</h4>
                    </div>
                    <div className="col-md-9">
                        {error && <div className="text-danger fw-bold"> { error } </div> }
                        {loading && <div className="text-success fw-bold"> Loading Data . . . </div>}
                       {jobs && <JobCards allJobs={ jobs } />}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AllJobsPage;