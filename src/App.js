import AppDescription from './components/AppDescription';
import Comments from './components/comments/Comments';
import Items from './components/items/Items';
import styles from './styles/App.module.css';

import { useData } from './hooks/useData';

function App() {
  const { items, activeItem, setItems, setActiveItem } = useData();

  return (
    <div className={styles.grid}>
      <div className={styles['grid-item']}>
        <AppDescription />
      </div>

      <div className={styles['grid-item']}>
        <Items
          items={items}
          setItems={setItems}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>

      <div className={styles['grid-item']}>
        <Comments activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>
    </div>
  );
}

export default App;
