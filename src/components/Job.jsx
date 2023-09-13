/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Job({ jobId, jobs, setJobs }) {
  const [editing, setEditing] = useState(false);
  const job = jobs.find((job) => job.id === jobId);

  function changeHandler(e, key) {
    const nextJobs = jobs.map((job) => {
      if (job.id !== jobId) return job;
      else return { ...job, [key]: e.target.value };
    });
    setJobs(nextJobs);
  }

  function toggleEdit() {
    setEditing(!editing);
  }

  function submitHandler(e) {
    e.preventDefault();
    setEditing(!editing);
  }

  return editing ? (
    <form onSubmit={submitHandler}>
      {Object.keys(job).map((key, index) => {
        if (key === "id" || key === "tasks") return;
        return (
          <input
            key={index}
            value={job[key]}
            onChange={(e) => changeHandler(e, key)}
          />
        );
      })}
      <button type="submit">Submit</button>
    </form>
  ) : (
    <>
      <button onClick={toggleEdit}>Edit Job</button>
      <div>
        <p>{job.title}</p>
        <p>{job.employer}</p>
        <p>{job.location}</p>
        <p>{job.startDate}</p>
        <p>{job.endDate}</p>
      </div>
    </>
  );
}
