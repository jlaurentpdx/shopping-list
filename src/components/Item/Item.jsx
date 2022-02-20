import { useState } from 'react';
import { useItems } from '../../context/ItemsContext';
import styles from './Item.css';

export default function Item({ item }) {
  const [updateItem, setUpdateItem] = useState(item.item);
  const [updateEmoji, setUpdateEmoji] = useState(item.emoji);
  const [editing, setEditing] = useState(false);
  const { handleEditItem, handleDeleteItem } = useItems();

  let itemContent;

  if (editing) {
    itemContent = (
      <form className={styles.editForm}>
        <input
          value={updateItem}
          onChange={(e) => {
            setUpdateItem(e.target.value);
          }}
          aria-label={`Editing ${item.item}`}
          className={styles.header}
        />
        <input
          value={updateEmoji}
          onChange={(e) => {
            setUpdateEmoji(e.target.value);
          }}
          aria-label={`Editing ${item.emoji}`}
          className={styles.header}
        />

        <button
          aria-label={`Save changes to ${item.item}`}
          onClick={(e) => {
            e.preventDefault();
            handleEditItem({ ...item, item: updateItem, emoji: updateEmoji });
            setEditing(false);
          }}
        >
          Save
        </button>
        <button
          aria-label={`Delete ${item.item}`}
          onClick={(e) => {
            e.preventDefault();
            handleDeleteItem(item.id);
          }}
        >
          Delete
        </button>
      </form>
    );
  } else {
    itemContent = (
      <>
        <div className={styles.item}>
          <p className={styles.emoji}>{item.emoji}</p>
          <h3 className={styles.header}>{item.item}</h3>
        </div>
        <div className={styles.buttons}>
          <button
            aria-label={`Edit ${item.item}`}
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
          <button
            aria-label={`Delete ${item.item}`}
            onClick={() => handleDeleteItem(item.id)}
          >
            Delete
          </button>
        </div>
      </>
    );
  }

  return <>{itemContent}</>;
}
