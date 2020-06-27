import { connect } from 'react-redux';
import { setViewFilter } from '../actions';
import TaskFilter from '../components/TaskFilter';

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = {
    setViewFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilter);