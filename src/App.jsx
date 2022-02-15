export default function App() {
  const initialItems = [
    { id: 0, item: 'meat' },
    { id: 1, item: 'potatoes' },
    { id: 2, item: 'broccoli' },
  ];
  return (
    <div>
      <h1>Shopping List</h1>
      <form>
        <input type="text" placeholder="new item" aria-label="new-item" />
        <button aria-label="submit">Add Item</button>
      </form>
      <ul>
        {initialItems.map((item) => (
          <li>
            <h2 style={{ display: 'inline' }}>{item.item}</h2>
            <button aria-label="edit">Edit</button>
            <button aria-label="delete">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
