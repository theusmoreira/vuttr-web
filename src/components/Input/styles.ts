import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ebeaed;
  border-radius: 10px;
  border: 1px solid #ebeaed;
  padding: 16px;
  width: 100%;
  height: 50px;
  color: #170c3a;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #f95e5a;
      background: #feefee;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #170c3a;
      border-color: #170c3a;
    `}
  ${props =>
    props.isField &&
    css`
      color: #170c3a;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #170c3a;
    &::placeholder {
      color: #8f8a9b;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #feefee;
    color: #f95e5a;
    &::before {
      border-color: #f95e5a transparent;
    }
  }
`;
