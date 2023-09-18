/* eslint-disable react/prop-types */
// import { useState } from "react";

let itemId = 1;

export default function Tasks({ taskId, tasks, setTasks, editing }) {
  // const [editing, setEditing] = useState(false);
  const task = tasks.find((task) => task.id === taskId);

  // function toggleEdit() {
  //   setEditing(!editing);
  // }

  function changeHandler(e, itemId) {
    const nextItems = task.items.map((item) => {
      if (item.id !== itemId) return item;
      else return { ...item, description: e.target.value };
    });
    const nextTasks = tasks.map((task) => {
      if (task.id !== taskId) return task;
      else {
        return { ...task, items: nextItems };
      }
    });
    setTasks(nextTasks);
  }

  // function submitHandler(e) {
  //   e.preventDefault();
  //   // setEditing(!editing);
  // }

  function deleteItem(itemId) {
    const nextItems = task.items.filter((item) => item.id !== itemId);
    const nextTasks = tasks.map((task) => {
      if (task.id !== taskId) return task;
      else {
        return { ...task, items: nextItems };
      }
    });
    setTasks(nextTasks);
  }

  function addItem(e) {
    e.preventDefault();
    const nextTasks = tasks.map((task) => {
      if (task.id !== taskId) return task;
      else
        return {
          ...task,
          items: [
            ...task.items,
            {
              id: itemId,
              description: "<New responsibility>",
            },
          ],
        };
    });
    itemId += 1;
    setTasks(nextTasks);
  }

  return editing ? (
    // <form onSubmit={submitHandler}>
    <>
      <ul className="item-list">
        {task.items.map((item) => (
          <li key={item.id}>
            <input
              value={item.description}
              onChange={(e) => changeHandler(e, item.id)}
            />
            <button onClick={() => deleteItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>+ Add Task</button>
    </>
  ) : (
    // </form>
    <>
      {/* <button onClick={toggleEdit}>Edit Tasks</button> */}
      <ul className="item-list">
        {task.items.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
    </>
  );
}
