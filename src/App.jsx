import { useReducer } from 'react';
import styles from './App.css';

export default function App() {
  const initialItems = [
    { id: 0, item: 'ice cream', image: '🍨' },
    { id: 1, item: 'donuts', image: '🍩' },
    { id: 2, item: 'flan', image: '🍮' },
  ];

  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch({ type: 'add', log: 'add new item pressed' });
  };
  const handleEditItem = (id) => {
    dispatch({ type: 'edit', log: `edit ${id} pressed` });
  };
  const handleDeleteItem = (id) => {
    dispatch({ type: 'delete', log: `delete ${id} pressed` });
  };

  function itemsReducer(items, { type, id, item, image, log }) {
    switch (type) {
      case 'add': {
        console.log(log);
        return [...items];
      }
      case 'edit': {
        console.log(log);
        return [...items];
      }
      case 'delete': {
        console.log(log);
        return [...items];
      }
      default:
        throw Error(`Unknown case: ${type} is undefined.`);
    }
  }

  return (
    <div className={styles.App}>
      <h1>Shopping List</h1>
      <main>
        <form className={styles.form}>
          <input type="text" placeholder="new item" aria-label="new-item" />
          <button aria-label="submit" onClick={handleAddItem}>
            Add Item
          </button>
        </form>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id} className={styles.card}>
              <h2 className={styles.header}>{item.item}</h2>
              <p className={styles.emoji}>{item.image}</p>
              <div className={styles.buttons}>
                <button
                  aria-label="edit"
                  onClick={() => handleEditItem(item.item)}
                >
                  Edit
                </button>
                <button
                  aria-label="delete"
                  onClick={() => handleDeleteItem(item.item)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
