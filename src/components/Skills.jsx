import { initialSkills } from "../assets/initial-data";
import { useState } from "react";
import Skill from "./Skill";

let skillId = 1;

export default function Skills() {
  const [skills, setSkills] = useState(initialSkills);
  const [editingList, setEditingList] = useState([]);

  function toggleEdit(id) {
    editingList.includes(id)
      ? setEditingList(editingList.filter((item) => item !== id))
      : setEditingList([...editingList, id]);
  }

  function addSkill() {
    setSkills([...skills, { id: skillId, description: "<New Skill>" }]);
    skillId += 1;
  }

  function deleteSkill(id) {
    setSkills(skills.filter((skill) => skill.id !== id));
  }

  return (
    <>
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
            <button onClick={() => toggleEdit(skill.id)}>Edit skill</button>
            <button onClick={() => deleteSkill(skill.id)}>&times;</button>
          </div>
        ))}
      </ul>
      <button onClick={addSkill}>Add Skill</button>
    </>
  );
}
