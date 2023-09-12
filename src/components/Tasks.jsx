/* eslint-disable react/prop-types */
import { useState } from "react";
import { initialTasks } from "../assets/initial-data";

export default function Tasks({ id, editing }) {
  const [tasks, setTasks] = useState(initialTasks);

  let task;
  const exists = tasks.some((task) => task.id === id);
  if (exists) {
    [task] = tasks.filter((task) => task.id === id);
  } else {
    addTask(id);
    [task] = tasks.filter((task) => task.id === id);
  }

  function addTask(id) {
    setTasks([...tasks, { ...initialTasks, id: id }]);
  }

  function changeHandler(e, itemId) {
    const newText = e.target.value;
    const newItems = task.items.map((item) => {
      if (item.id === itemId) {
        return { ...item, text: newText };
      } else return { ...item };
    });
    const newTasks = tasks.map((aTask) => {
      if (aTask.id === task.id) {
        return { ...aTask, items: newItems };
      } else return { ...aTask };
    });
    setTasks(newTasks);
  }

  return editing ? (
    <form>
      {task.items.map((item) => (
        <input
          key={item.id}
          value={item.text}
          onChange={(e) => changeHandler(e, item.id)}
        />
      ))}
    </form>
  ) : (
    <ul>
      {task.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
