import { useState } from 'react';
import { useItems } from '../../context/ItemsContext';
import styles from './AddItem';

export default function AddItem() {
  const [item, setItem] = useState('');
  const [image, setImage] = useState('');
  const { handleAddItem } = useItems();

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
        onClick={(e) => handleAddItem(e, item, image)}
      >
        Add Item
      </button>
    </form>
  );
}
