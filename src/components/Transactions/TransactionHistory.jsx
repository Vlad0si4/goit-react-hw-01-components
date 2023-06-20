import React from 'react';
import PropTypes from 'prop-types';
import { Head, Wrapper, Rows } from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Wrapper>
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>
      <Rows>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </Rows>
    </Wrapper>
  );
};

TransactionHistory.propType = {
  items: PropTypes.oneOfType([PropTypes.string]),
};
