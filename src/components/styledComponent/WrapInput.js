import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: 360px;
  padding-right: 0;
  left: -25px;
  top: -260px;
  border-radius: 9999px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: rows;
  background: white;
  transition: 0.8s;
  
  &:hover {
    width: 380px;
  }
`;
