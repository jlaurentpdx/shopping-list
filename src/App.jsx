import styles from './App.css';

export default function App() {
  const initialItems = [
    { id: 0, item: 'meat' },
    { id: 1, item: 'potatoes' },
    { id: 2, item: 'broccoli' },
  ];
  return (
    <div className={styles.App}>
      <h1>Shopping List</h1>
      <main>
        <form className={styles.form}>
          <input type="text" placeholder="new item" aria-label="new-item" />
          <button aria-label="submit">Add Item</button>
        </form>
        <ul className={styles.list}>
          {initialItems.map((item) => (
            <li key={item.id} className={styles.listItem}>
              <h2>{item.item}</h2>
              <button aria-label="edit">Edit</button>
              <button aria-label="delete">Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
