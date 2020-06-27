import { connect } from 'react-redux';
import { changeTodoText, addTodo } from "../actions";
import TodoHeader from '../components/TodoHeader';

const mapStateToProps = (state) => {
    return {
        todoText: state.todoText
    }
  }

const mapDispatchToProps = {
    changeTodoText,
    addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader);