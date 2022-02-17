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
      <form>
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
        <div className={styles.buttons}>
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
        </div>
      </form>
    );
  } else {
    itemContent = (
      <>
        <h2 className={styles.header}>{item.item}</h2>
        <p className={styles.emoji}>{item.emoji}</p>

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

  return <div>{itemContent}</div>;
}
