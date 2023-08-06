import styles from "./ListRowCell.module.css";

const ListRowCell = ({ children ,ss}) => {
  return <td data-dd={ss}className={styles.cell}>{children}</td>;
};

export default ListRowCell;
