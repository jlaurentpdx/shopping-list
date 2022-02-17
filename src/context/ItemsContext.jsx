import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { fetchList, addItem } from '../services/shoppingList';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemsReducer, []);

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchList();
      console.log('data', data);
      data.map((item) => {
        console.log('item', item);
        handleAddItem(item);
      });
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleAddItem = async ({ id, item, image }) => {
    if (!id) await addItem({ item, image });
    dispatch({ type: 'add', id, item, image });
  };
  const handleEditItem = (id) => {
    dispatch({ type: 'edit', log: `edit ${id} pressed` });
  };
  const handleDeleteItem = ({ id, item }) => {
    dispatch({ type: 'delete', id, item, log: `delete ${item} pressed` });
  };

  function itemsReducer(items, action) {
    switch (action.type) {
      case 'add': {
        return [
          ...items,
          { id: action.id, item: action.item, image: action.image },
        ];
      }
      case 'update': {
        console.log(action.log);
        return [...items];
      }
      case 'delete': {
        console.log(action.log);
        return [...items];
      }
      default:
        throw Error(`Unknown case: ${action.type} is undefined.`);
    }
  }

  return (
    <ItemsContext.Provider
      value={{
        loading,
        items,
        item,
        setItem,
        image,
        setImage,
        handleAddItem,
        handleEditItem,
        handleDeleteItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemsContext);

  if (!context)
    throw new Error(
      'useItems cannot be used outside of ItemsProvider. Did you forget to wrap your components with ItemsProvider?'
    );

  return context;
};
