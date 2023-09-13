import { useState } from "react";
import { initialPersonalInfo } from "../assets/initial-data";

export default function PersonalInfo() {
  const [editing, setEditing] = useState(false);
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);

  function changeHandler(e, property) {
    const next = { ...personalInfo, [property]: e.target.value };
    setPersonalInfo(next);
  }

  function toggleEdit() {
    setEditing(!editing);
  }

  function submitHandler(e) {
    e.preventDefault();
    setEditing(!editing);
  }

  return editing ? (
    <form onSubmit={submitHandler} className="personal-info editing-mode">
      {Object.keys(personalInfo).map((key) => {
        return (
          <input
            key={key}
            type="text"
            value={personalInfo[key]}
            onChange={(e) => changeHandler(e, key)}
          />
        );
      })}
      <button type="submit">Submit</button>
    </form>
  ) : (
    <div className="personal-info display-mode">
      {Object.keys(personalInfo).map((key) => (
        <div key={key}>{personalInfo[key]}</div>
      ))}
      <button onClick={toggleEdit}>Edit Personal Info</button>
    </div>
  );
}
