import { initialEducation } from "../assets/initial-data";
import { useState } from "react";

export default function Education() {
  const [editing, setEditing] = useState(false);
  const [education, setEducation] = useState(initialEducation);

  function toggleEdit() {
    setEditing(!editing);
  }

  function changeHandler() {}

  function submitHandler(e) {
    e.preventDefault();
    setEditing(!editing);
  }

  return !editing ? (
    <>
      {education.map((item) =>
        Object.keys(item).map((key, index) => {
          if (key === "id") return;
          return <p key={index}>{item[key]}</p>;
        })
      )}
      <button onClick={toggleEdit}>Edit Education</button>
    </>
  ) : (
    <form onSubmit={submitHandler}>
      {education.map((item) =>
        Object.keys(item).map((key, index) => {
          if (key === "id") return;
          return (
            <input key={index} value={item[key]} onChange={changeHandler} />
          );
        })
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
