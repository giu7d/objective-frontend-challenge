import styled from 'styled-components'

export const BaseButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  transition: 200ms opacity ease-out;

  &::-moz-focus-inner {
    border: none;
  }

  &:active {
    opacity: 0.5;
    border-style: none;
  }

  &:hover {
    opacity: 0.5;
  }
`
