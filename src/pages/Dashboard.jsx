import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("USD");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, cardData] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const lengthOfRow = mockData.results.length; // 1 Done

   /*6*/ function Click(e) {
    function run(data, index) {
      cardData({
        buySellIndicator: data.executionDetails.buySellIndicator,
        orderStaus: data.executionDetails.orderStatus,
        orderType: data.executionDetails.orderType,
      });

      setSelectedOrderTimeStamps({
        orderReceived: timestamps.results[index].timestamps.orderReceived,
        orderStatusUpdated:
          timestamps.results[index].timestamps.orderStatusUpdated,
        orderSubmitted: timestamps.results[index].timestamps.orderSubmitted,
      });
    }
    mockData.results.map((data) =>
      data["&id"].includes(e.dataset.id) ? run(data, e.dataset.index) : null
    );
  }
   /*6*/
  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={lengthOfRow} />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
            id="1"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
            id="1"
          />
        </div>
        <List
          rows={mockData.results}
          /*2*/ timestamps={timestamps.results} /*2*/
          /*3*/ currency={currency} /*3*/
          /*4*/ SearchRow={searchText} /*4*/
           /*6*/ clickFromDashboard={Click}  /*6*/
        />
      </div>
    </div>
  );
};

export default Dashboard;
