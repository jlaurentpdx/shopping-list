import { useReducer, useState } from 'react';
import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';

export default function Home() {
  const initialItems = [
    { id: 0, item: 'ice cream', image: '🍨' },
    { id: 1, item: 'donuts', image: '🍩' },
    { id: 2, item: 'flan', image: '🍮' },
  ];

  const [items, dispatch] = useReducer(itemsReducer, initialItems);
  const [item, setItem] = useState('');
  const [image, setImage] = useState('');

  const handleAddItem = (e, item, image) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      id: items.length,
      item,
      image,
      log: `add pressed, adding ${item} to list`,
    });
  };
  const handleEditItem = (id) => {
    dispatch({ type: 'edit', log: `edit ${id} pressed` });
  };
  const handleDeleteItem = ({ id, item }) => {
    dispatch({ type: 'delete', id, item, log: `delete ${item} pressed` });
  };

  function itemsReducer(items, { type, id, item, image, log }) {
    switch (type) {
      case 'add': {
        console.log(log);
        return [...items, { id, item, image }];
      }
      case 'edit': {
        console.log(log);
        return [...items];
      }
      case 'delete': {
        console.log(log);
        return items.filter((item) => item.id !== id);
      }
      default:
        throw Error(`Unknown case: ${type} is undefined.`);
    }
  }

  return (
    <main>
      <h1>Shopping List</h1>
      <AddItem
        item={item}
        setItem={setItem}
        setImage={setImage}
        image={image}
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
