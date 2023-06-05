import PropTypes from 'prop-types';
import {
  Container,
  Wrapper,
  Table,
  Thead,
  Tbody,
  TrBody,
} from './transactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Container>
      <Wrapper>
        <Table>
          <Thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </Thead>

          <Tbody>
            {items.map(item => {
              return (
                <TrBody key={item.id}>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.currency}</td>
                </TrBody>
              );
            })}
          </Tbody>
        </Table>
      </Wrapper>
    </Container>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
