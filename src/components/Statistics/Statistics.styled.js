import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 auto;
  width: 400px;
  min-height: 100px;
`;

export const StatList = styled.ul`
  display: flex;
  gap: 5px;
`;

export const StatsItem = styled.li`
  width: calc(100% / 5);
  min-height: 80px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};

  border-radius: 15%;
`;
