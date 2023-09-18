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
    <>
      <form onSubmit={submitHandler} className="personal-brand">
        <textarea value={brandStatement} onChange={changeHandler} />
        <div className="flex-end">
          <button type="submit">Confirm Changes</button>
        </div>
      </form>
      <hr />
    </>
  ) : (
    <>
      <div onClick={toggleEdit} className="personal-brand non-input">
        <p>{brandStatement}</p>
      </div>
      <hr />
    </>
  );
}
