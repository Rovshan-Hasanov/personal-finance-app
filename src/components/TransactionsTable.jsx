import './TransactionTable.css'

function formatAmount(amt) {
  return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amt)
}

function TransactionsTable({ transactions }) {
  return (
    <table>
      <caption>Past Transactions</caption>
      <thead>
        <tr>
          <th>Date</th>
          <th>Debit</th>
          <th>Credit</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.debit}</td>
            <td>{transaction.credit}</td>
            <td>{transaction.description}</td>
            <td>{formatAmount(transaction.amount)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionsTable
