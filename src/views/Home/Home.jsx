import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';
import { useItems } from '../../context/ItemsContext';

export default function Home() {
  const {
    loading,
    item,
    setItem,
    image,
    setImage,
    handleAddItem,
    items,
    handleEditItem,
    handleDeleteItem,
  } = useItems();
  if (loading) return <h1>loading...</h1>;

  return (
    <main>
      <h1>Shopping List</h1>
      <AddItem
        item={item}
        setItem={setItem}
        image={image}
        setImage={setImage}
        handleAddItem={handleAddItem}
      />
      <ItemList
        items={items}
        handleEditItem={handleEditItem}
        handleDeleteItem={handleDeleteItem}
      />
    </main>
  );
}
