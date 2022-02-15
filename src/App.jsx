import { useReducer, useState, useEffect } from 'react';
import styles from './App.css';

export default function App() {
  const initialItems = [
    { id: 0, item: 'ice cream', image: '🍨' },
    { id: 1, item: 'donuts', image: '🍩' },
    { id: 2, item: 'flan', image: '🍮' },
  ];

  const [items, dispatch] = useReducer(itemsReducer, initialItems);
  const [newItem, setNewItem] = useState('');
  const [newEmoji, setNewEmoji] = useState('');

  useEffect(() => {}, [items]);

  const handleAddItem = (e, item, image) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      id: items.length,
      item,
      image,
      log: `add pressed, adding ${newItem} to list`,
    });
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
        return [...items, { id, item, image }];
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
          <input
            type="text"
            placeholder="new item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            aria-label="new-item"
          />
          <input
            type="text"
            placeholder="emoji"
            value={newEmoji}
            onChange={(e) => setNewEmoji(e.target.value)}
            aria-label="emoji"
          />
          <button
            aria-label="submit"
            onClick={(e) => handleAddItem(e, newItem, newEmoji)}
          >
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
