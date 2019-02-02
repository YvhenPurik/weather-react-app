import styled from "styled-components"


export default styled.div`
position: absolute;
left: 220;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
&:after{
    z-index: -2;
  top: 0.625rem;
  left: 50%;
  display: block;
  width: 98%;
  height: calc(100% + 6px);
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  -webkit-filter: blur(0.625rem);
          filter: blur(0.625rem);
  opacity: 0.25;
  &:focus {
  outline: none;
 }
}
`