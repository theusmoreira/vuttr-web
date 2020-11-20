import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #fdfdfd;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-size: 24px;
    color: #170c3a;
    border: none;
    background: transparent;
  }
`;

export const TitleContainer = styled.div``;

export const InputCheckbox = styled.div`
  display: grid;
`;
