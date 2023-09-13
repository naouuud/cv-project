import { useState } from "react";
import { initialPersonalBrand } from "../assets/initial-data";

export default function PersonalBrand() {
  const [editing, setEditing] = useState(false);
  const [personalBrand, setPersonalBrand] = useState(initialPersonalBrand);

  function changeHandler(e) {
    setPersonalBrand(e.target.value);
  }

  function toggleEdit() {
    setEditing(!editing);
  }

  function submitHandler(e) {
    e.preventDefault();
    toggleEdit();
  }

  return editing ? (
    <form onSubmit={submitHandler} className="personal-brand editing-mode">
      <textarea value={personalBrand} onChange={changeHandler} />
      <button type="submit">Submit</button>
    </form>
  ) : (
    <div className="personal-brand display-mode">
      <p>{personalBrand}</p>
      <button onClick={toggleEdit}>Edit Personal Brand</button>
    </div>
  );
}
