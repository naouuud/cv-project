/* eslint-disable react/prop-types */
import { useState } from "react";
import Job from "./Job";
import { initialJobs } from "../assets/initial-data";

let jobId = 1;

export default function Jobs() {
  const [jobs, setJobs] = useState(initialJobs);

  function addJob() {
    setJobs([...jobs, { ...initialJobs[0], id: jobId }]);
    jobId += 1;
  }

  function deleteJob(id) {
    setJobs(jobs.filter((job) => job.id !== id));
  }

  return (
    <>
      {jobs.map((job) => (
        <div key={job.id}>
          <button onClick={() => deleteJob(job.id)}>Delete job</button>
          <Job jobId={job.id} jobs={jobs} setJobs={setJobs} />
        </div>
      ))}
      <button onClick={addJob}>Add job</button>
    </>
  );
}
