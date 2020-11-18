import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 16px;
  height: 50px;
  background: #170c3a;
  color: #fff;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 600;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#170C3A')};
  }
`;
