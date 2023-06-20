import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 40px
  width: 400px;
  min-height: 400px;
  border-radius: 20px;
  box-shadow: rgb(0, 0, 0) 0px 3px 8px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 20px;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 300px;
  border-radius: 0%;
`;

export const Name = styled.p`
  font-weight: 700;
  font-style: 24px;
  letter-spacing: 0.02em;
`;

export const Tag = styled.p`
  font-weight: 500;
`;

export const Location = styled.p`
  font-weight: 500;
`;

export const Stats = styled.ul`
  background-color: rgb(230, 230, 235);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 0 0 20px 20px;
  border: 1px solid rgb(200, 200, 235);
`;

export const StatsItem = styled.li`
  min-height: 100px;
  width: calc(100% / 3);
  border-left: 1px solid rgb(200, 200, 235);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.span`
  font-weight: 500;
`;
