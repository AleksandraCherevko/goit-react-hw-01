import css from "./TransactionHistory.module.css";
import clsx from "clsx";

const evenRowClass = css.evenRow;

const TransactionHistory = ({ items }) => {
  return (
    <>
      <div className={css.table}>
        <table className={css.table}>
          <thead className={css.tableWrap}>
            <tr>
              <th className={css.tableTitle}>Type</th>
              <th className={css.tableTitle}>Amount</th>
              <th className={css.tableTitle}>Currency</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={item.id}
                className={clsx(index % 2 === 0 && evenRowClass)}
              >
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionHistory;
