import { useItems } from '../../context/ItemsContext';
import { useTheme } from '../../context/ThemeContext';
import styles from './Header.css';

export default function Header() {
  const { items, handleClearItems } = useItems();
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <h1 className={styles.title}>Shopping List</h1>
      <div className={styles.container}>
        <div className={styles.top}>
          {items.length === 1 ? (
            <span>you have {items.length} item on your list. </span>
          ) : (
            <span>you have {items.length} items on your list. </span>
          )}{' '}
          {items.length > 0 && (
            <span
              onClick={handleClearItems}
              className={styles.button}
              aria-label="Clear item list"
            >
              {' '}
              clear all?
            </span>
          )}
        </div>
        <div className={styles.bottom}>
          <p>
            Viewing in {theme} mode.
            <span
              onClick={toggleTheme}
              className={styles.button}
              aria-label="toggle theme"
            >
              {' '}
              Click to switch.
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}
