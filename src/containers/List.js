import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from "../actions";
import List from '../components/List';

const mapStateToProps = (state) => {
    const { todos, status } = state;
    let newTodo = []
    if (status === 'isCompleted') {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].isCompleted === true) {
                newTodo.push(todos[i])
            }
        }
    } else if (status === 'active') {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].isCompleted === false) {
                newTodo.push(todos[i])
            }
        }
    } else {
        newTodo = todos
    }
    return {
        todos: newTodo
    }
}

const mapDispatchToProps = {
    deleteTodo,
    toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
