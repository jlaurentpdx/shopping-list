import { useState } from 'react';
import { useItems } from '../../context/ItemsContext';
import styles from './AddItem';

export default function AddItem() {
  const [item, setItem] = useState('');
  const [emoji, setEmoji] = useState('');
  const { handleAddItem } = useItems();

  return (
    <form className={styles.form}>
      <input
        value={item}
        placeholder="new item"
        onChange={(e) => setItem(e.target.value)}
        aria-label="new item name"
      />
      <input
        value={emoji}
        placeholder="emoji"
        onChange={(e) => setEmoji(e.target.value)}
        aria-label="new item emoji"
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
