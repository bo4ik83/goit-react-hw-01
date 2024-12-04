import PropTypes from "prop-types"
import "./TransactionHistory.css"

const TransactionHistory = ({ items }) => {
    return (
        <table className="transction-history">
      <thead>
        <tr>
            <tr>Type</tr>
            <th>Amounts</th>
            <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        ))}
      </tbody>
      </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TransactionHistory;