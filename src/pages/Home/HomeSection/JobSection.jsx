import { useEffect, useState } from "react";
import JobCard from "../../../components/JobCards";


const JobSection = () => {

  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:4000/jobs")
        .then((response) => {
          if (!response.ok) {
            throw Error("Cannot Fetch Data");
          }
          return response.json(); //parsing
        })
        .then((data) => {
          setJobs(data);
          setLoading(false); //stop loading after you have gotten your dat
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false); //stop loading incase you encounter an error
        })
    }, 3000);
  }, []);

  return (
    <div>
      <div className="container my-2">
        <h4 className="text-center">
          Latest <span className="border-bottom border-3 border-primary p-2">Job</span> Vacancies
        </h4>
        <p className="my-3 text-center text-muted">
          Search and Find your dream job easily. Just browse a job and apply if you need to.
          They are waiting for your skills
        </p>
        {/* Nest the card component */}
        {error && <div className="text-danger fw-bold"> {error} </div>}
        {loading && <div className="text-success fw-bold"> Loading Data . . .</div>}
        {jobs && <JobCard allJobs={jobs.filter(job => job.discretion === "Remote")} />}
      </div>
    </div>
  );
}

export default JobSection;