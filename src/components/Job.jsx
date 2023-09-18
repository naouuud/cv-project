/* eslint-disable react/prop-types */
import { useState } from "react";
import Tasks from "./Tasks";

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

  function setDate(e, key) {
    const date = new Date(e.target.value);
    setJobs(
      jobs.map((job) => {
        if (job.id !== jobId) return job;
        else return { ...job, [key]: date };
      })
    );
  }

  function dateToString(date) {
    const month = date.getMonth();
    if (!month) return "Present";
    const monthName = months[month];
    const year = date.getFullYear();
    return `${monthName} ${year}`;
  }

  function dateToInput(date) {
    let day = date.getDate();
    if (!day) return "";
    if (day < 10) day = `0${day}`;
    let month = date.getMonth() + 1;
    if (month < 10) month = `0${month}`;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  function submitHandler(e) {
    e.preventDefault();
    setEditing(!editing);
  }

  function deletePair(e, id) {
    e.preventDefault();
    setJobs(jobs.filter((job) => job.id !== id));
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return editing ? (
    <form onSubmit={submitHandler}>
      <div className="job-task-pair">
        <div className="job edit-mode">
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
                  value={
                    typeof job[key] === "string" ? "" : dateToInput(job[key])
                  }
                  onChange={(e) => setDate(e, key)}
                />
              );
          })}
          <button onClick={(e) => deletePair(e, job.id)}>&times;</button>
        </div>
        <Tasks
          taskId={job.id}
          tasks={tasks}
          setTasks={setTasks}
          editing={editing}
        />
        <div className="flex-end">
          <button type="submit">Confirm Changes</button>
        </div>
      </div>
    </form>
  ) : (
    <div className="job-task-pair" onClick={toggleEdit}>
      <div className="job display-mode">
        <p>
          <span className="bold">{job.title}</span>, {job.employer},{" "}
          {job.location}
        </p>
        <p>
          {typeof job.startDate === "string"
            ? job.startDate
            : dateToString(job.startDate)}{" "}
          to{" "}
          {typeof job.endDate === "string"
            ? job.endDate
            : dateToString(job.endDate)}
        </p>
      </div>
      <Tasks
        taskId={job.id}
        tasks={tasks}
        setTasks={setTasks}
        editing={editing}
      />
    </div>
  );
}
