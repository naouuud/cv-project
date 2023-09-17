/* eslint-disable react/prop-types */
import { useState } from "react";

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

  function submitHandler(e) {
    e.preventDefault();
    // setEditing(!editing);
  }

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

  return editing ? (
    <form onSubmit={submitHandler}>
      {task.items.map((item) => (
        <div key={item.id}>
          <input
            value={item.description}
            onChange={(e) => changeHandler(e, item.id)}
          />
          <button onClick={() => deleteItem(item.id)}>&times;</button>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  ) : (
    <>
      {/* <button onClick={toggleEdit}>Edit Tasks</button> */}
      <ul>
        {task.items.map((item) => (
          <div key={item.id}>
            <li>{item.description}</li>
            <button onClick={() => deleteItem(item.id)}>&times;</button>
          </div>
        ))}
      </ul>
    </>
  );
}
