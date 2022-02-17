import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders a shopping list with options to add, edit, delete ', () => {
  render(<App />);

  // Verify that all default content renders, ensure list contains 3 items
  screen.getByRole('heading', { name: /shopping list/i });

  const addItemName = screen.getByRole('textbox', { name: /new item name/i });
  const addItemEmoji = screen.getByRole('textbox', { name: /new item emoji/i });
  const addItemButton = screen.getByRole('button', { name: /add new item/i });

  const itemList = screen.getByRole('list', { name: /your items/i });

  expect(itemList.children).toHaveLength(3);

  // Add a new item to the list, list should now contain 4 items
  userEvent.type(addItemName, 'pie');
  userEvent.type(addItemEmoji, '🥧');
  userEvent.click(addItemButton);

  expect(screen.getByRole('heading', { name: /pie/i })).toBeInTheDocument();
  expect(itemList.children).toHaveLength(4);

  // Edit an existing item, ensure list still contains 4 items
  const bestFood = screen.queryByRole('heading', { name: /donuts/i });
  const editDonuts = screen.getByRole('button', { name: /edit donuts/i });

  userEvent.click(editDonuts);

  const editItemDonuts = screen.getByRole('textbox', {
    name: /editing donuts/i,
  });
  const editEmojiDonuts = screen.getByRole('textbox', {
    name: /editing 🍩/i,
  });
  const saveEditsDonuts = screen.getByRole('button', {
    name: /save changes to donuts/i,
  });

  userEvent.type(editItemDonuts, '{selectall}{del}soda');
  userEvent.type(editEmojiDonuts, '{selectall}{del}🥤');
  userEvent.click(saveEditsDonuts);

  expect(bestFood).not.toBeInTheDocument();
  expect(editItemDonuts).not.toBeInTheDocument();
  expect(editEmojiDonuts).not.toBeInTheDocument();
  expect(saveEditsDonuts).not.toBeInTheDocument();

  const itemSoda = screen.queryByRole('heading', { name: /soda/i });
  expect(itemList.children).toHaveLength(4);

  // Delete an existing item, list should now contain 3 items
  const deleteSodaButton = screen.queryByRole('button', {
    name: /delete soda/i,
  });

  userEvent.click(deleteSodaButton);

  expect(itemSoda).not.toBeInTheDocument();
  expect(deleteSodaButton).not.toBeInTheDocument();

  expect(itemList.children).toHaveLength(3);
});
