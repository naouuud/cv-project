/* eslint-disable react/prop-types */
// import { useState } from "react";
// import { initialTasks } from "../assets/initial-data";

export default function Tasks({ taskId, editing, tasks, setTasks }) {
  const task = tasks.find((task) => task.id === taskId);

  let itemId = 1;

  // function changeHandler(e, itemId) {
  //   const newText = e.target.value;
  //   const newItems = task.items.map((item) => {
  //     if (item.id === itemId) {
  //       return { ...item, text: newText };
  //     } else return { ...item };
  //   });
  //   const newTasks = tasks.map((aTask) => {
  //     if (aTask.id === task.id) {
  //       return { ...aTask, items: newItems };
  //     } else return { ...aTask };
  //   });
  //   setTasks(newTasks);
  // }

  function addItem() {
    setTasks(
      tasks.filter((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            items: [
              ...task.items,
              { id: itemId, description: "<New responsibility>" },
            ],
          };
        } else return { ...task };
      })
    );
    itemId += 1;
  }

  return editing ? (
    task.items.map((item) => (
      <>
        <input
          key={item.id}
          value={item.description}
          onChange={(e) => changeHandler(e, item.id)}
        />
        <button onClick={addItem}>Add task</button>
      </>
    ))
  ) : (
    <ul>
      {task.items.map((item) => (
        <li key={item.id}>{item.description}</li>
      ))}
    </ul>
  );
}
