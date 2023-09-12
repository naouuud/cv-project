/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Job({ jobId, jobs, setJobs }) {
  const [editing, setEditing] = useState(false);
  const job = jobs.find((job) => job.id === jobId);

  function changeHandler(e, key) {
    const next = jobs.map((job) => {
      if (job.id !== jobId) return job;
      else return { ...job, [key]: e.target.value };
    });
    setJobs(next);
  }

  //   function taskHandler(e, index) {
  //     const next = jobs.map((job) => {
  //         if (job.id !== jobId) return job;
  //         else return { ...job, [tasks][index][value]: e.target.value };
  //       });
  //       setJobs(next);
  //   }

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
      {/* {job.tasks.map((task, index) => (
        <input
          key={task.id}
          value={task.value}
          onChange={(e) => taskHandler(e, index)}
        />
      ))} */}
      <button type="submit">Submit</button>
    </form>
  ) : (
    <>
      <button onClick={toggleEdit}>Edit</button>
      <div>
        <p>{job.title}</p>
        <p>{job.employer}</p>
        <p>{job.location}</p>
        <p>{job.startDate}</p>
        <p>{job.endDate}</p>
        {/* <ul>
          {job.tasks.map((task) => (
            <li key={task.id}>{task.value}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
}
