import styled from 'styled-components';

export const Btn = styled.button`
  width: 15rem;
  height: 5rem;
  display: inline-block;
  border-radius: 1rem;
  position: relative;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #55ac62;
  padding: 1rem;

  color: ${(props: any) => (props.white ? '#333' : '#fff')} !important;
  ${props => props.theme.typo.p1};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.5s;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    &::after {
      transform: scaleX(1.2) scaleY(1.4);
      background-color: #55ac62;
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
