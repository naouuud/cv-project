/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Education({ educationId, educations, setEducations }) {
  const [editing, setEditing] = useState(false);
  const education = educations.find(
    (education) => education.id === educationId
  );

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

  return !editing ? (
    <>
      {Object.keys(education).map((key) => {
        if (key === "id") return;
        return <p key={key}>{education[key]}</p>;
      })}
      <button onClick={toggleEdit}>Edit Education</button>
    </>
  ) : (
    <form onSubmit={submitHandler}>
      {Object.keys(education).map((key) => {
        if (key === "id") return;
        return (
          <input
            key={key}
            value={education[key]}
            onChange={(e) => changeHandler(e, key)}
          />
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
}
