import styles from './ItemList.css';

export default function ItemList({
  items,
  onReloadNeeded,
  handleEditItem,
  handleDeleteItem,
}) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id} className={styles.card}>
          <h2 className={styles.header}>{item.item}</h2>
          <p className={styles.emoji}>{item.image}</p>
          <div className={styles.buttons}>
            <button aria-label="edit" onClick={() => handleEditItem(item.item)}>
              Edit
            </button>
            <button
              aria-label="delete"
              onClick={() => {
                handleDeleteItem(item);
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
