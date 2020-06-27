import React from "react";

let TodoHeader = (props) => {
    let handleChange = (event) => {
        let todoText = event.target.value;
        props.changeTodoText(todoText);
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        let todoText = props.todoText;
        let todoItem = {
            isCompleted: false,
            id: String(Date.now()),
            content: todoText
        }
        if (todoText.length === 0) {
            return
        }
        props.addTodo(todoItem);
        props.changeTodoText("");
    }
        return (
            <>
                <h1> todolist </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={props.todoText}
                        onChange={handleChange}
                        placeholder="Key in your tasks..."
                    />
                </form>
                <hr />
            </>
        )
}

export default TodoHeader;