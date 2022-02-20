import { createContext, useContext, useEffect, useReducer } from 'react';
import { useLocalStorage } from '../hooks/hooks';
import { v4 as uuid } from 'uuid';

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [local, setLocal] = useLocalStorage('shopping-list', [
    { id: uuid(), item: 'ice cream', emoji: '🍨' },
    { id: uuid(), item: 'donuts', emoji: '🍩' },
    { id: uuid(), item: 'flan', emoji: '🍮' },
  ]);

  const [items, dispatch] = useReducer(itemsReducer, local);

  useEffect(() => {
    setLocal(items);
  }, [items]);

  function itemsReducer(items, action) {
    switch (action.type) {
      case 'add': {
        return [
          ...items,
          { id: action.id, item: action.item, emoji: action.emoji },
        ];
      }
      case 'edit': {
        return items.map((item) => {
          if (item.id === action.item.id) {
            return action.item;
          }
          return item;
        });
      }
      case 'delete': {
        return items.filter((item) => item.id !== action.id);
      }
      case 'clear': {
        return [];
      }
      default:
        throw Error(`Unknown action: ${action.type} is undefined.`);
    }
  }

  const handleAddItem = (e, item, emoji) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      id: uuid(),
      item,
      emoji,
    });
  };
  const handleEditItem = (item) => {
    dispatch({ type: 'edit', item });
  };
  const handleDeleteItem = (taskId) => {
    dispatch({ type: 'delete', id: taskId });
  };
  const handleClearItems = () => {
    dispatch({ type: 'clear' });
  };

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleEditItem,
        handleDeleteItem,
        handleClearItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemsContext);

  if (!context)
    throw new Error('useItems cannot be used outside of ItemsProvider');

  return context;
};
