/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Job({ jobId, jobs, setJobs, tasks, setTasks }) {
  const [editing, setEditing] = useState(false);
  const job = jobs.find((job) => job.id === jobId);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function toggleEdit() {
    setEditing(!editing);
  }

  function changeHandler(e, key) {
    const nextJobs = jobs.map((job) => {
      if (job.id !== jobId) return job;
      else return { ...job, [key]: e.target.value };
    });
    setJobs(nextJobs);
  }

  function dateHandler(e, key) {
    const date = new Date(e.target.value);
    const month = date.getMonth();
    const monthName = months[month];
    const year = date.getFullYear();
    const dateString = `${monthName} ${year}`;
    setJobs(
      jobs.map((job) => {
        if (job.id !== jobId) return job;
        else return { ...job, [key]: dateString };
      })
    );
  }

  function submitHandler(e) {
    e.preventDefault();
    setEditing(!editing);
  }

  function deletePair(id) {
    setJobs(jobs.filter((job) => job.id !== id));
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return editing ? (
    <form onSubmit={submitHandler}>
      {Object.keys(job).map((key) => {
        if (key === "id" || key === "tasks") return;
        else if (key !== "startDate" && key !== "endDate")
          return (
            <input
              key={key}
              value={job[key]}
              onChange={(e) => changeHandler(e, key)}
            />
          );
        else
          return (
            <input
              key={key}
              type="date"
              onChange={(e) => dateHandler(e, key)}
            />
          );
      })}
      <button onClick={() => deletePair(job.id)}>Delete Job</button>
      <button type="submit">Submit</button>
    </form>
  ) : (
    <>
      {/* <button onClick={toggleEdit}>Edit Job</button> */}
      <div className="job display-mode" onClick={toggleEdit}>
        <p>
          <span className="bold">{job.title}</span>, {job.employer},{" "}
          {job.location}
        </p>
        <p>
          {job.startDate} to {job.endDate}
        </p>
      </div>
    </>
  );
}
