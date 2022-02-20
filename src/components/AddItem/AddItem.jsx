import { useState } from 'react';
import { useItems } from '../../context/ItemsContext';
import styles from './AddItem.css';

export default function AddItem() {
  const [item, setItem] = useState('');
  const [emoji, setEmoji] = useState('');
  const { handleAddItem } = useItems();

  return (
    <form className={styles.form}>
      <input
        className={styles.item}
        value={item}
        placeholder="new item"
        onChange={(e) => setItem(e.target.value)}
        aria-label="new item name"
        required
      />
      <input
        className={styles.emoji}
        value={emoji}
        placeholder="emoji (optional)"
        onChange={(e) => setEmoji(e.target.value)}
        aria-label="new item emoji"
        maxLength="2"
      />
      <button
        aria-label="add new item"
        onClick={(e) => handleAddItem(e, item, emoji)}
      >
        Add Item
      </button>
    </form>
  );
}
