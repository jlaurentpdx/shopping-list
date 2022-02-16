import { useState } from 'react';
import styles from './Item.css';

export default function Item({ item, handleEditItem, handleDeleteItem }) {
  const [editing, setEditing] = useState(false);
  const [updateItem, setUpdateItem] = useState('');
  const [updateImage, setUpdateImage] = useState('');

  return (
    <div>
      {editing ? (
        <>
          <input
            className={styles.header}
            type="test"
            placeholder={item.item}
            value={updateItem}
            onChange={(e) => setUpdateItem(e.target.value)}
          />
          <input
            className={styles.header}
            type="test"
            placeholder={item.image}
            value={updateImage}
            onChange={(e) => setUpdateImage(e.target.value)}
          />
        </>
      ) : (
        <>
          <h2 className={styles.header}>{item.item}</h2>
          <p className={styles.emoji}>{item.image}</p>
        </>
      )}
      <div className={styles.buttons}>
        {editing ? (
          <button
            aria-label="save"
            onClick={() => {
              handleEditItem(item.id, updateItem, updateImage);
              setEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <button aria-label="edit" onClick={() => setEditing(true)}>
            Edit
          </button>
        )}
        <button aria-label="delete" onClick={() => handleDeleteItem(item)}>
          Delete
        </button>
      </div>
    </div>
  );
}
