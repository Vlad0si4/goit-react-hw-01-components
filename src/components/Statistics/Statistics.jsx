import React from 'react';
import PropTypes from 'prop-types';
import { StatList, StatsItem, Wrapper } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <Wrapper>
      {title && <h2 className="title">{title}</h2>}
      <StatList>
        {stats.map(stat => {
          const bgColor = generateRandomColor();
          return (
            <StatsItem key={stat.id} bgColor={bgColor}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </StatsItem>
          );
        })}
      </StatList>
    </Wrapper>
  );
};

Statistics.propType = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
