import React from "react";
import styled from 'styled-components';

const Label = styled.label`
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    align-items: center;
    justify-content: space-between;
    width: 500px;
`;
const Div = styled.div`
    max-width: 450px;
`;

let List = (props) => {
    let handleClick = (event) => {
        let id = event.target.id;
        props.toggleTodo(id);

    }
    let clicktoClose = (event) => {
        let id = event.target.id;
        props.deleteTodo(id)
    }
    const { todos } = props;
    return (
        <div>
            {todos.map(newTodo => (
                <Label key={newTodo.id}>
                    <input
                        type="checkbox"
                        checked={newTodo.isCompleted}
                        id={newTodo.id}
                        onChange={handleClick}
                    />
                    <Div>{newTodo.content}</Div>
                    <button onClick={clicktoClose} id={newTodo.id}>
                        Delete
                        </button>
                </Label>
            ))}
        </div>
    );
}

export default List;