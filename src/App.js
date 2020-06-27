import React from "react";
import TodoHeader from "./containers/TodoHeader";
import List from "./containers/List.js";
import TaskFilter from "./containers/TaskFilter.js";

let App = () => {
    return (
        <div className="main">
            <TodoHeader />
            <List />
            <TaskFilter />
        </div>
    )
}

export default App;