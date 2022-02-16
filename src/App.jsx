import styles from './App.css';
import { ItemsProvider } from './context/ItemsContext';
import Home from './views/Home/Home';

export default function App() {
  return (
    <div className={styles.App}>
      <ItemsProvider>
        <Home />
      </ItemsProvider>
    </div>
  );
}
