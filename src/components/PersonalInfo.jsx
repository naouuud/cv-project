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
    <>
      <form onSubmit={submitHandler} className="personal-info edit-mode">
        <input
          className="name"
          type="text"
          value={personalInfo.name}
          onChange={(e) => changeHandler(e, "name")}
        />
        <div>
          Located in{" "}
          <input
            type="text"
            value={personalInfo.address}
            onChange={(e) => changeHandler(e, "address")}
          />{" "}
          Reach me at{" "}
          <input
            type="text"
            value={personalInfo.email}
            onChange={(e) => changeHandler(e, "email")}
          />{" "}
          or{" "}
          <input
            type="text"
            value={personalInfo.phone}
            onChange={(e) => changeHandler(e, "phone")}
          />{" "}
          <button type="submit">Submit</button>
        </div>
      </form>
      <hr />
    </>
  ) : (
    <>
      <div onClick={toggleEdit} className="personal-info display-mode">
        <div className="name">{personalInfo.name}</div>
        <div>
          Located in <span className="bold">{personalInfo.address}</span>. Reach
          me at <span className="bold">{personalInfo.email}</span> or{" "}
          <span className="bold">{personalInfo.phone}</span>.
        </div>
      </div>
      <hr />
    </>
  );
}
