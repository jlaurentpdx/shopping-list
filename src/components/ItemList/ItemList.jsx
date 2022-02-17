import styles from './ItemList.css';
import Item from '../Item/Item';
import { useItems } from '../../context/ItemsContext';

export default function ItemList() {
  const { items } = useItems();

  return (
    <ul className={styles.list} aria-label="your items">
      {items.map((item) => (
        <li key={item.id} className={styles.card}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
}
