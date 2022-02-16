import styles from './ItemList.css';
import Item from '../Item/Item';

export default function ItemList({ items, handleEditItem, handleDeleteItem }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id} className={styles.card}>
          <Item
            item={item}
            handleEditItem={handleEditItem}
            handleDeleteItem={handleDeleteItem}
          />
        </li>
      ))}
    </ul>
  );
}
