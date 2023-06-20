import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-top: 50px;
  max-width: 250px;

  margin-left: auto;
  margin-right: auto;
`;

export const ItemList = styled.li`
  min-height: 100px;
  box-shadow: rgb(0, 0, 0) 0px 3px 8px;
  border-radius: 10px;
  padding: 5px 30px;

  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
