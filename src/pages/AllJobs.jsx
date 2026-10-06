import JobCards from "../components/JobCards";
import useFetch from "../hook/useFetch";

const AllJobsPage = () => {

    const { allData: jobs, error, loading } = useFetch("http://localhost:4000/jobs");

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
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-8">
                        {error && <div className="text-danger fw-bold"> { error } </div> }
                        {loading && <div className="text-success fw-bold"> Loading Jobs . . . </div>}
                        <JobCards allJobs={ jobs } />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllJobsPage;