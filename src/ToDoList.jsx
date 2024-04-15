import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const uppdateTask = tasks.filter((element, i) => i !== index);
    setTasks(uppdateTask);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const uppdatedTask = [...tasks];
      [uppdatedTask[index], uppdatedTask[index - 1]] = [
        uppdatedTask[index - 1],
        uppdatedTask[index],
      ];
      setTasks(uppdatedTask);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const uppdatedTask = [...tasks];
      [uppdatedTask[index], uppdatedTask[index + 1]] = [
        uppdatedTask[index + 1],
        uppdatedTask[index],
      ];
      setTasks(uppdatedTask);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      {/* Enter input adding task */}
      <div>
        <input
          type="text"
          placeholder="Enter a task ...."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      {/*********** Main list *********/}
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
