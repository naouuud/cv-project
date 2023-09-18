/* eslint-disable react/prop-types */

export default function Skill({
  skillId,
  skills,
  setSkills,
  editing,
  editingList,
  setEditingList,
}) {
  const skill = skills.find((skill) => skill.id === skillId);

  function changeHandler(e) {
    setSkills(
      skills.map((skill) => {
        if (skill.id !== skillId) return skill;
        else return { ...skill, description: e.target.value };
      })
    );
  }

  function submitHandler(e) {
    e.preventDefault();
    editing
      ? setEditingList(editingList.filter((item) => item !== skillId))
      : setEditingList([...editingList, skillId]);
  }

  function deleteSkill(e) {
    e.preventDefault();
    setSkills(skills.filter((skill) => skill.id !== skillId));
  }

  function toggleEdit() {
    editingList.includes(skillId)
      ? setEditingList(editingList.filter((item) => item !== skillId))
      : setEditingList([...editingList, skillId]);
  }

  return !editing ? (
    <>
      <li className="skill non-input" onClick={toggleEdit}>
        {skill.description}
      </li>
    </>
  ) : (
    <form onSubmit={submitHandler}>
      <div className="skill-submit-pair">
        <li>
          <input
            key={skill.id}
            className="skill"
            value={skill.description}
            onChange={changeHandler}
          />
          <button className="x-button" onClick={deleteSkill}>
            &times;
          </button>
        </li>
        <button type="submit">Confirm Changes</button>
      </div>
    </form>
  );
}
