import React from "react";
import { ViewFilters } from '../actions';
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = ViewFilters;

// Stateless Component)
const TaskFilter = (props) => {
    return (
        <div>
            <button onClick={() => { props.setViewFilter(SHOW_ALL) }}>All</button>
            <button onClick={() => { props.setViewFilter(SHOW_ACTIVE) }}>Active</button>
            <button onClick={() => { props.setViewFilter(SHOW_COMPLETED) }}>Completed</button>
        </div>
    )
}

export default TaskFilter;