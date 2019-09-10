import React from 'react';
import styled from "styled-components";

export default function Todo(props) {
  return (
    <div>
      <TheP
        style={{
          textDecoration: `${props.todo.completed ? 'line-through' : 'none'}`,
        }}
        onClick={() =>
          props.dispatch({ type: 'TOGGLE_TODO', payload: props.todo.id })
        }>
        {props.todo.item}
      </TheP>
    </div>
  );
}

const TheP = styled.p`
  margin-left: 110px;
  color: white;
`;