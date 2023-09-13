/* eslint-disable react/prop-types */
import { useState } from "react";
import Job from "./Job";
import Tasks from "./Tasks";
import { initialJobs } from "../assets/initial-data";
import { initialTasks } from "../assets/initial-data";

let pairId = 1;

export default function Jobs() {
  const [jobs, setJobs] = useState(initialJobs);
  const [tasks, setTasks] = useState(initialTasks);

  function addPair() {
    setJobs([...jobs, { ...initialJobs[0], id: pairId }]);
    setTasks([...tasks, { ...initialTasks[0], id: pairId }]);
    pairId += 1;
  }

  function deletePair(id) {
    setJobs(jobs.filter((job) => job.id !== id));
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      {jobs.map((job) => (
        <div key={job.id}>
          <button onClick={() => deletePair(job.id)}>Delete Job</button>
          <Job jobId={job.id} jobs={jobs} setJobs={setJobs} />
          <Tasks taskId={job.id} tasks={tasks} setTasks={setTasks} />
        </div>
      ))}
      <button onClick={addPair}>Add Job</button>
    </>
  );
}
