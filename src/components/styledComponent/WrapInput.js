import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: 300px;
  padding-right: 0;
  left: -25px;
  top: -200px;
  border-radius: 9999px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: rows;
  background: white;
  transition: 0.8s;
  
  &:hover {
    width: 320px;
  }
`;
