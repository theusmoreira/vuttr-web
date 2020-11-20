import { Form } from '@unform/web';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Input from '../../components/Input';
import {
  Container,
  Content,
  Header,
  TitleContainer,
  InputCheckbox,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header>
          <TitleContainer>
            <h1>VUTTR</h1>
            <p>Very Useful To Remember</p>
          </TitleContainer>
          <button type="button">Siar</button>
        </Header>
        <InputCheckbox>
          <Form onSubmit={() => console.log('foi')}>
            <Input
              name="search"
              icon={FiSearch}
              containerStyle={{
                border: '1px solid #ebeaed',
                width: '40%',
                height: '10px',
                background: '#f5f4f6',
              }}
            />
          </Form>
          <input type="checkbox" />
        </InputCheckbox>
      </Content>
    </Container>
  );
};

export default Dashboard;
