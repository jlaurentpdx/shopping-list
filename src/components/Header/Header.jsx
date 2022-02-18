import { useItems } from '../../context/ItemsContext';
import { useTheme } from '../../context/ThemeContext';
import styles from './Header.css';

export default function Header() {
  const { items, handleClearItems } = useItems();
  const { theme, toggleTheme } = useTheme();

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
      <button
        onClick={toggleTheme}
        className={styles.button}
        aria-label="toggle theme"
      >
        {theme} mode
      </button>
    </header>
  );
}
