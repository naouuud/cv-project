import { initialSkills } from "../assets/initial-data";
import { useState } from "react";
import Skill from "./Skill";

let skillId = 1;

export default function Skills() {
  const [skills, setSkills] = useState(initialSkills);
  const [editingList, setEditingList] = useState([]);

  function addSkill() {
    setSkills([...skills, { id: skillId, description: "<New Skill>" }]);
    skillId += 1;
  }

  return (
    <>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <div key={skill.id}>
            <Skill
              skillId={skill.id}
              skills={skills}
              setSkills={setSkills}
              editing={editingList.includes(skill.id)}
              editingList={editingList}
              setEditingList={setEditingList}
            />
            {/* <button onClick={() => toggleEdit(skill.id)}>Edit skill</button> */}
          </div>
        ))}
      </ul>
      <button onClick={addSkill}>+ Add Skill</button>
    </>
  );
}
