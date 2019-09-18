import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  background: lightcoral;
  padding: 20px;
  width: 100%;
  height: 80px;
  justify-content: center;
`;

function Title() {
  return (
    <Header>
      <h3>around__markets</h3>
    </Header>
  );
}

export default Title;
