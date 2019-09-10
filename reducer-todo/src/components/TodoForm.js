import React from 'react';

export default function TodoForm(props) {
  return (
    <div className="todo-form">
      <input
        type='text'
        value={props.todo}
        placeholder=' Insert todo here '
        onChange={e => props.setTodo(e.target.value)}
      />
      <button
        onClick={() =>
          props.dispatch({ type: 'ADD_TODO', payload: props.todo })
        }>
        Submit
      </button>
    </div>
  );
}