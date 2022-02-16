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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchList();
      dispatch({ type: 'init', list: data });
      setLoading(false);
    };
    fetchData();
  }, []);

  const [items, dispatch] = useReducer(itemsReducer, []);
  const [item, setItem] = useState('');
  const [image, setImage] = useState('');

  const handleAddItem = (e, item, image) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      item,
      image,
    });
  };
  const handleEditItem = (id) => {
    dispatch({ type: 'edit', log: `edit ${id} pressed` });
  };
  const handleDeleteItem = ({ id, item }) => {
    dispatch({ type: 'delete', id, item, log: `delete ${item} pressed` });
  };

  function itemsReducer(items, action) {
    switch (action.type) {
      case 'init': {
        return action.list;
      }
      case 'add': {
        console.log(action.log);
        addItem({ item: action.item, image: action.image });
        return [...items];
      }
      case 'edit': {
        console.log(log);
      }
      case 'delete': {
        console.log(log);
      }
      default:
        throw Error(`Unknown case: ${type} is undefined.`);
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
