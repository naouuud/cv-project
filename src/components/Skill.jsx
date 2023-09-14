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

  return !editing ? (
    <>
      <li>{skill.description}</li>
    </>
  ) : (
    <form onSubmit={submitHandler}>
      <input
        key={skill.id}
        value={skill.description}
        onChange={changeHandler}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
