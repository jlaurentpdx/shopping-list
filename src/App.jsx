import styles from './App.css';
import { ItemsProvider } from './context/ItemsContext';
import Home from './views/Home/Home';
import Header from './components/Header/Header';

export default function App() {
  return (
    <div className={styles.App}>
      <ItemsProvider>
        <Header />
        <Home />
      </ItemsProvider>
    </div>
  );
}
