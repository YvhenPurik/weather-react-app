import styled from 'styled-components';

export default styled.button`
  width: 50px;
  height: 50px;
  z-index: 1000;
  position: relative;
  top: -200px;
  left: 22px;
  background: #f72652;
  border-radius: 9999px;
  /* border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-top-left-radius: 25px;
  border-bottom-left-radius:25px; */
  border: none;
  &:hover {
  }
  &svg {
    fill: white;
  }
`;
