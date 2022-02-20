import styles from './ItemList.css';
import Item from '../Item/Item';
import { useItems } from '../../context/ItemsContext';
import { useTheme } from '../../context/ThemeContext';

export default function ItemList() {
  const { items } = useItems();
  const { theme } = useTheme();

  return (
    <ul className={styles.list} aria-label="your items">
      {items.map((item) => (
        <li key={item.id} className={styles.card + ' ' + styles[theme]}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
}
