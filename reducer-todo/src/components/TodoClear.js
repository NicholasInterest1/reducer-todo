import React from "react";
import styled from "styled-components";

export default function TodoClear(props) {
  return (
    <div className="clear-btn">
      <Btn onClick={() => props.dispatch({ type: "CLEAR_COMPLETED" })}>
        Clear completed
      </Btn>
    </div>
  );
}

const Btn = styled.button`
    border-radius: 10px;
    margin-top: 15px;
`;