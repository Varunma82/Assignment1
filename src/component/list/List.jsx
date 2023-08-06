import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";
import styles from "./List.module.css";

const List = ({
  rows,
  /*2*/ timestamps /*2*/,
  /*3*/ currency /*3*/,
  /*4*/ SearchRow /*4*/,
  /*6*/ clickFromDashboard /*6*/,
}) => {
  /*6*/ function ClickOfRow(e) {
    clickFromDashboard(e.currentTarget);
  } /*6*/
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row, index) =>
          /*4*/ row["&id"]
            .toLowerCase()
            .includes(SearchRow.toLowerCase()) /*4*/ ? (
            <ListRow
              /*6*/ onClick={ClickOfRow}
              /*6*/ id={{ row: row["&id"], index: index }}
              key={index}
            >
              <ListRowCell>{row["&id"]}</ListRowCell>
              <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
              <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
              {/*2*/}
              <ListRowCell>
                {timestamps[index].timestamps.orderSubmitted}
              </ListRowCell>
              {/*2*/}
              <ListRowCell>
                {/*3*/}
                {currency == "USD"
                  ? row.bestExecutionData.orderVolume.USD
                  : currency == "GBP"
                  ? row.bestExecutionData.orderVolume.GBP
                  : currency == "JPY"
                  ? row.bestExecutionData.orderVolume.JPY
                  : currency == "EUR"
                  ? row.bestExecutionData.orderVolume.EUR
                  : ""}
                {/*3*/}
              </ListRowCell>
            </ListRow>
          ) : null
        )}
      </tbody>
    </table>
  );
};

export default List;
