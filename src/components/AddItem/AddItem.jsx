import { useState } from 'react';
import styles from './AddItem';

export default function AddItem({ onReloadNeeded, handleAddItem }) {
  const [item, setItem] = useState('');
  const [image, setImage] = useState('');

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="new item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        aria-label="new-item"
      />
      <input
        type="text"
        placeholder="emoji"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        aria-label="item-emoji"
      />
      <button
        aria-label="submit"
        onClick={(e) => {
          e.preventDefault();
          handleAddItem({ item, image });
          onReloadNeeded();
        }}
      >
        Add Item
      </button>
    </form>
  );
}
