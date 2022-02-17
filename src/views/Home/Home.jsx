import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';

export default function Home() {
  return (
    <main>
      <h1>Shopping List</h1>
      <AddItem />
      <ItemList />
    </main>
  );
}
