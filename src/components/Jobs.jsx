/* eslint-disable react/prop-types */
import { useState } from "react";
import Job from "./Job";
import Tasks from "./Tasks";
import { initialJobs } from "../assets/initial-data";
import { initialTasks } from "../assets/initial-data";

let jobId = 1;

export default function Jobs() {
  const [jobs, setJobs] = useState(initialJobs);
  const [tasks, setTasks] = useState(initialTasks);

  function addJob() {
    setJobs([...jobs, { ...initialJobs[0], id: jobId }]);
    setTasks([...tasks, { ...initialTasks[0], id: jobId }]);
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
          <Tasks taskId={job.id} tasks={tasks} setTasks={setTasks} />
        </div>
      ))}
      <button onClick={addJob}>Add job</button>
    </>
  );
}
