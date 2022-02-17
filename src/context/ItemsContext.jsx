import { createContext, useContext, useReducer } from 'react';

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const initialItems = [
    { id: 0, item: 'ice cream', emoji: '🍨' },
    { id: 1, item: 'donuts', emoji: '🍩' },
    { id: 2, item: 'flan', emoji: '🍮' },
  ];

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

  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const handleAddItem = (e, item, emoji) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      id: items.length,
      item,
      emoji,
    });
  };
  const handleEditItem = (item) => {
    dispatch({
      type: 'edit',
      item,
    });
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
