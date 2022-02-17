import { useItems } from '../../context/ItemsContext';
import styles from './Header.css';

export default function Header() {
  const { items, handleClearItems } = useItems();
  return (
    <header>
      <h1 className={styles.title}>Shopping List</h1>
      {items.length === 1 ? (
        <p>{items.length} item on your list</p>
      ) : (
        <p>{items.length} items on your list</p>
      )}
      {items.length > 0 && (
        <button
          onClick={handleClearItems}
          className={styles.button}
          aria-label="Clear item list"
        >
          clear all
        </button>
      )}
    </header>
  );
}
