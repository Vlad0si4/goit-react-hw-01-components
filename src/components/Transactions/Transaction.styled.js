import styled from 'styled-components';

export const Wrapper = styled.table`
  width: 580px;
  margin: 40px auto;
  border-radius: 5px;
  border-style: hidden;
  border-spacing: 0;
  border: 1px solid #edf0fd;
`;

export const Head = styled.thead`
  height: 40px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  background-color: #00d3ff;
`;

export const Rows = styled.tbody`
  height: 40px;
  font-size: 16px;
  text-align: center;
  color: grey;

  tr:nth-child(even) {
    background-color: #edf0fd;
  }
`;
