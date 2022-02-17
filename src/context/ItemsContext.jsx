import { createContext, useContext, useReducer } from 'react';

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const initialItems = [
    { id: 0, item: 'ice cream', image: '🍨' },
    { id: 1, item: 'donuts', image: '🍩' },
    { id: 2, item: 'flan', image: '🍮' },
  ];

  function itemsReducer(items, action) {
    switch (action.type) {
      case 'add': {
        return [
          ...items,
          { id: action.id, item: action.item, image: action.image },
        ];
      }
      case 'edit': {
        return items.map((item) => {
          if (item.id === action.task.id) {
            return action.task;
          }
          return item;
        });
      }
      case 'delete': {
        return items.filter((item) => item.id !== action.id);
      }
      default:
        throw Error(`Unknown action: ${action.type} is undefined.`);
    }
  }

  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const handleAddItem = (e, item, image) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      id: items.length,
      item,
      image,
    });
  };
  const handleEditItem = (task) => {
    dispatch({
      type: 'edit',
      task,
    });
  };
  const handleDeleteItem = (taskId) => {
    dispatch({ type: 'delete', id: taskId });
  };

  return (
    <ItemsContext.Provider
      value={{ items, handleAddItem, handleEditItem, handleDeleteItem }}
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
