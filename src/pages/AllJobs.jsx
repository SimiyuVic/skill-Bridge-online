import { useState } from "react";
import JobCards from "../components/JobCards";
import useFetch from "../hook/useFetch";

const AllJobsPage = () => {

    const { allData: jobs, error, loading } = useFetch("http://localhost:4000/jobs");

    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");

    const filteredJobs =  jobs.filter((job)=>{
       const searchMatch =  job.companyName.toLowerCase().includes(search.toLowerCase()) || 
       job.jobTitle.toLowerCase().includes(search.toLowerCase());

       const locationMatching  = job.companyLocation.toLowerCase().includes(location.toLowerCase());

       return searchMatch && locationMatching ;
       
    });
    

    return (
        <div>
            <div className="container my-3">
                <div className="row ">
                    <div className="col-md-4">
                        <div className="card shadow-sm border-0 p-4">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="" className="my-2">
                                        Search by company name or job title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        placeholder="e.g Sofware Dev or Safaricom"
                                        value={search}
                                        onChange={(e)=>setSearch(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="my-2">
                                        Search by Location
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        placeholder="e.g Seatle, Mombasa"
                                        value={location}
                                        onChange={(e)=>setLocation(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h6 className="text-primary my-3">
                            { 
                                filteredJobs.length
                            } job(s) found
                        </h6>
                        { 
                            !loading && !error && filteredJobs.length === 0 && (
                                <div className="text-danger"> 
                                    <h4 className="text-center my-4 ">No Jobs Found</h4>
                                    <p className="text-center text-muted">Try a new search, either new location, new title or check your spelling</p>
                                </div>
                            )
                        }
                        {error && <div className="text-danger fw-bold"> { error } </div> }
                        {loading && <div className="text-success fw-bold"> Loading Jobs . . . </div>}
                        <JobCards allJobs={ filteredJobs } />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllJobsPage;