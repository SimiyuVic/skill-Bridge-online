import { useEffect, useState } from "react";
import JobCard from "../../../components/JobCards";


const JobSection = () => {

  const [jobs, setJobs] = useState(null);

  useEffect(()=>{
    fetch("http://localhost:4000/jobs")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setJobs(data)
    })
  });

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
        {jobs && <JobCard allJobs={jobs.filter(job=>job.discretion === "Remote")} />}
      </div>
    </div>
  );
}

export default JobSection;