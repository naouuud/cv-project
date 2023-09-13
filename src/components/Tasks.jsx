/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Tasks({ taskId, tasks, setTasks }) {
  const [editing, setEditing] = useState(false);
  const task = tasks.find((task) => task.id === taskId);

  // let itemId = 1;

  // // function addItem() {
  // //   setTasks(
  // //     tasks.filter((task) => {
  // //       if (task.id === taskId) {
  // //         return {
  // //           ...task,
  // //           items: [
  // //             ...task.items,
  // //             { id: itemId, description: "<New responsibility>" },
  // //           ],
  // //         };
  // //       } else return { ...task };
  // //     })
  // //   );
  // //   itemId += 1;
  // // }

  function toggleEdit() {
    setEditing(!editing);
  }

  function changeHandler(e, itemId) {
    const nextItems = [{ id: itemId, description: e.target.value }];
    const nextTasks = tasks.map((task) => {
      if (task.id !== taskId) return task;
      else return { ...task, items: nextItems };
    });
    setTasks(nextTasks);
  }

  function submitHandler(e) {
    e.preventDefault();
    setEditing(!editing);
  }

  return editing ? (
    <form onSubmit={submitHandler}>
      {task.items.map((item) => (
        <input
          key={item.id}
          value={item.description}
          onChange={(e) => changeHandler(e, item.id)}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  ) : (
    <>
      <button onClick={toggleEdit}>Edit Tasks</button>
      <ul>
        {task.items.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
    </>
  );
}
