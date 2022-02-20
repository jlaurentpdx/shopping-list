import { ItemsProvider } from './context/ItemsContext';
import { useTheme } from './context/ThemeContext';

import Home from './views/Home/Home';
import Header from './components/Header/Header';
import styles from './App.css';

export default function App() {
  const { theme } = useTheme();
  return (
    <div className={styles.App + ' ' + styles[theme]}>
      <ItemsProvider>
        <Header />
        <Home />
      </ItemsProvider>
    </div>
  );
}
