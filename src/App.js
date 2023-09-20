import AppDescription from './components/AppDescription';
import Comments from './components/comments/Comments';
import Items from './components/todo/Items';
import styles from './styles/App.module.css';

const DUMMY_ARTICLE = {
  name: 'First item',
  id: '11624664',
  comments: [
    { body: 'four', color: '#000000', id: '11624664-0' },
    { body: 'five', color: '#cd7a7a', id: '11624664-1' },
  ],
};

function App() {
  return (
    <div className={styles.grid}>
      <div className={styles['grid-item']}>
        <AppDescription />
      </div>

      <div className={styles['grid-item']}>
        <Items />
      </div>

      <div className={styles['grid-item']}>
        <Comments article={DUMMY_ARTICLE} />
      </div>
    </div>
  );
}

export default App;
