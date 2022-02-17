import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';
import { useItems } from '../../context/ItemsContext';

export default function Home() {
  const {
    items,
    loading,
    onReloadNeeded,
    handleAddItem,
    handleEditItem,
    handleDeleteItem,
  } = useItems();

  if (loading) return <h1>loading...</h1>;

  return (
    <main>
      <h1>Shopping List</h1>
      <AddItem onReloadNeeded={onReloadNeeded} handleAddItem={handleAddItem} />
      <ItemList
        items={items}
        onReloadNeeded={onReloadNeeded}
        handleEditItem={handleEditItem}
        handleDeleteItem={handleDeleteItem}
      />
    </main>
  );
}
