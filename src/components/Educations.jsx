import { useState } from "react";
import { initialEducations } from "../assets/initial-data";
import Education from "./Education";

let educationId = 1;

export default function Educations() {
  const [educations, setEducations] = useState(initialEducations);

  function addEducation() {
    const [newEducation] = initialEducations;
    setEducations([...educations, { ...newEducation, id: educationId }]);
    educationId += 1;
  }

  // function deleteEducation(id) {
  //   setEducations(educations.filter((education) => education.id !== id));
  // }

  return (
    <>
      <h2>Education</h2>
      {educations.map((education) => (
        <div key={education.id}>
          {/* <button onClick={() => deleteEducation(education.id)}>
            Delete Education
          </button> */}
          <Education
            educationId={education.id}
            educations={educations}
            setEducations={setEducations}
          />
        </div>
      ))}
      <button className="add-education" onClick={addEducation}>
        + Add Education
      </button>
      <hr />
    </>
  );
}
