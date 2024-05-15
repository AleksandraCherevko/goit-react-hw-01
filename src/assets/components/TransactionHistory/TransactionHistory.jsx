import css from "./TransactionHistory.module.css";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <div className={css.table}>
        <table className={css.tableWrap}>
          <thead className={css.tableWrap}>
            <tr>
              <th className={css.tableTitle}>Type</th>
              <th className={css.tableTitle}>Amount</th>
              <th className={css.tableTitle}>Currency</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className={css.column}>
                <td className={css.type}>{item.type}</td>
                <td className={css.amount}>{item.amount}</td>
                <td className={css.currency}>{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionHistory;
