import { useReducer, useState } from 'react';
import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';

const initialItems = [
  { id: 0, item: 'ice cream', image: '🍨' },
  { id: 1, item: 'donuts', image: '🍩' },
  { id: 2, item: 'flan', image: '🍮' },
];

function itemsReducer(items, { type, id, item, image, log }) {
  switch (type) {
    case 'add': {
      return [...items, { id, item, image }];
    }
    case 'edit': {
      console.log(log);
      return items.map((item) => {
        if (item.id === id) {
          return item;
        }
        return item;
      });
    }
    case 'delete': {
      console.log(log);
      return items.filter((item) => item.id !== id);
    }
    default:
      throw Error(`Unknown case: ${type} is undefined.`);
  }
}

export default function Home() {
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
      log: `adding ${item} to list`,
    });
  };
  const handleEditItem = (id, item, image) => {
    dispatch({
      type: 'edit',
      id,
      item,
      image,
      log: `edit ${id} pressed`,
    });
  };
  const handleDeleteItem = ({ id, item }) => {
    dispatch({ type: 'delete', id, item, log: `delete ${item} pressed` });
  };

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
