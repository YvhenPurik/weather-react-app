import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: 20%;
  padding-right: 0;
  left: -30px;
  top: -300px;
  border-radius: 9999px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: rows;
  background: white;
  transition: 0.8s;
  &:hover {
    width: 22%;
  }
`;
