/* eslint-disable react/prop-types */
import { useState } from "react";
import Job from "./Job";
import { initialJobs } from "../assets/initial-data";
import { initialTasks } from "../assets/initial-data";

let pairId = 1;

export default function Jobs() {
  const [jobs, setJobs] = useState(initialJobs);
  const [tasks, setTasks] = useState(initialTasks);

  function addPair() {
    setJobs([...jobs, { ...initialJobs[0], id: pairId }]);
    setTasks([
      ...tasks,
      {
        id: pairId,
        items: [{ id: 0, description: "<Job responsibilities>" }],
      },
    ]);
    pairId += 1;
  }

  return (
    <>
      <h2>Professional Experience</h2>
      {jobs.map((job) => (
        <div key={job.id}>
          <Job
            jobId={job.id}
            jobs={jobs}
            setJobs={setJobs}
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>
      ))}
      <button className="add-job" onClick={addPair}>
        + Add Job
      </button>
      <hr />
    </>
  );
}
