import { useItems } from '../../context/ItemsContext';

export default function Header() {
  const { items } = useItems();
  return (
    <header>
      <h1>Shopping List</h1>
      {items.length === 1 ? (
        <h2>{items.length} item on your list</h2>
      ) : (
        <h2>{items.length} items on your list</h2>
      )}
    </header>
  );
}
