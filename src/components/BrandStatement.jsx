import { useState } from "react";
import { initialBrandStatement } from "../assets/initial-data";

export default function BrandStatement() {
  const [editing, setEditing] = useState(false);
  const [brandStatement, setBrandStatement] = useState(initialBrandStatement);

  function changeHandler(e) {
    setBrandStatement(e.target.value);
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
      <textarea value={brandStatement} onChange={changeHandler} />
      <button type="submit">Submit</button>
    </form>
  ) : (
    <div className="personal-brand display-mode">
      <p>{brandStatement}</p>
      <button onClick={toggleEdit}>Edit Brand Statement</button>
    </div>
  );
}
