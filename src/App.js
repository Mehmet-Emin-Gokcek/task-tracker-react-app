import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { REST_API_URL } from "./constants/RestApiRoute";

const App = () => {
  //this is a state that will be false by default
  const [showAddTask, setShowAddTask] = useState(false);

  //this is another state
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`${REST_API_URL}`);
    const data = await res.json();
    return data;
  };

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`${REST_API_URL}/${id}`);
    const data = await res.json();
    return data;
  };

  //Add Task Task
  const addTask = async (task) => {
    const res = await fetch(`${REST_API_URL}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000 + 1);
    // //Create new object with random ID since there is no backend to genereta id numbers
    // //'...task copies all fields of the 'task' parameter that is just passed to the new task object
    // const newTask = { id, ...task };
    // //update the state by copying all of the old tasks and adding the newTask
    // // '...tasks' copies already existing tasks to the useState
    // // 'newTask' adds the new task object to the array and sets the state
    // setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`${REST_API_URL}/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);

    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`${REST_API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {/* below is a different version of ternery operator 'true && ',
        it doesnt require else statement, only works with if(true)//} */}
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Tasks to Show"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};
export default App;
