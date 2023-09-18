/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Education({ educationId, educations, setEducations }) {
  const [editing, setEditing] = useState(false);
  const education = educations.find(
    (education) => education.id === educationId
  );
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
    setEducations(
      educations.map((education) => {
        if (education.id !== educationId) return education;
        else return { ...education, [key]: e.target.value };
      })
    );
  }

  function submitHandler(e) {
    e.preventDefault();
    setEditing(!editing);
  }

  function deleteEducation(id) {
    setEducations(educations.filter((education) => education.id !== id));
  }

  function setDate(e, key) {
    const date = new Date(e.target.value);
    setEducations(
      educations.map((education) => {
        if (education.id !== educationId) return education;
        else return { ...education, [key]: date };
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

  return !editing ? (
    <div className="education-info-pair" onClick={toggleEdit}>
      <div className="education">
        <p>
          <span className="bold">{education.degree}</span>,{" "}
          {education.institution}, {education.location}
        </p>
        <p>
          {typeof education.startDate === "string"
            ? education.startDate
            : dateToString(education.startDate)}{" "}
          to{" "}
          {typeof education.endDate === "string"
            ? education.endDate
            : dateToString(education.endDate)}
        </p>
      </div>
      <div className="education-other italic">{education.otherInfo}</div>
    </div>
  ) : (
    <div className="education-info-pair">
      <form onSubmit={submitHandler}>
        <div className="education">
          {Object.keys(education).map((key) => {
            if (key === "id" || key === "otherInfo") return;
            else if (key !== "startDate" && key !== "endDate")
              return (
                <input
                  key={key}
                  value={education[key]}
                  onChange={(e) => changeHandler(e, key)}
                />
              );
            else
              return (
                <input
                  key={key}
                  type="date"
                  value={
                    typeof education[key] === "string"
                      ? ""
                      : dateToInput(education[key])
                  }
                  onChange={(e) => setDate(e, key)}
                />
              );
          })}
          <button onClick={() => deleteEducation(education.id)}>&times;</button>
        </div>
        <input
          className="education-other italic"
          type="text"
          value={education.otherInfo}
          onChange={(e) => changeHandler(e, "otherInfo")}
        />
        <button type="submit">Confirm Changes</button>
      </form>
    </div>
  );
}
