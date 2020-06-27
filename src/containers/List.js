import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from "../actions";
import List from '../components/List';

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        status: state.status
    }
}

const mapDispatchToProps = {
    deleteTodo,
    toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
