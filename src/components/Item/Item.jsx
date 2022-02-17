import { useState } from 'react';
import { useItems } from '../../context/ItemsContext';
import styles from './Item.css';

export default function Item({ item }) {
  const [updateItem, setUpdateItem] = useState(item.item);
  const [updateImage, setUpdateImage] = useState(item.image);
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
          aria-label="Edit item name"
          className={styles.header}
        />
        <input
          value={updateImage}
          onChange={(e) => {
            setUpdateImage(e.target.value);
          }}
          aria-label="Edit item image"
          className={styles.header}
        />
        <div className={styles.buttons}>
          <button
            aria-label="save changes"
            onClick={(e) => {
              e.preventDefault();
              handleEditItem({ ...item, item: updateItem, image: updateImage });
              setEditing(false);
            }}
          >
            Save
          </button>
          <button
            aria-label="delete"
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
        <p className={styles.emoji}>{item.image}</p>

        <div className={styles.buttons}>
          <button aria-label="edit" onClick={() => setEditing(true)}>
            Edit
          </button>
          <button aria-label="delete" onClick={() => handleDeleteItem(item.id)}>
            Delete
          </button>
        </div>
      </>
    );
  }

  return <div>{itemContent}</div>;
}
