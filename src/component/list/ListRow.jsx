import styles from "./ListRow.module.css";

const ListCell = ({ children, onClick, id }) => {
  return (
    <tr
      onClick={onClick}
      data-id={id.row}
      data-index={id.index}
      className={styles.cell}
    >
      {children}
    </tr>
  );
};

export default ListCell;
