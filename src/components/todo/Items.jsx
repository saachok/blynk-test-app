import styles from '../../styles/todo/Items.module.css';
import ItemsList from './ItemsList';

const DUMMY_ITEMS = [
  {
    name: 'First item',
    id: '11624664',
    comments: [
      { body: 'four', color: '#000000', id: '11624664-0' },
      { body: 'five', color: '#cd7a7a', id: '11624664-1' },
    ],
  },
  {
    name: 'Second item',
    id: '66461649',
    comments: [{ body: 'three', color: '#000000', id: '6461649-0' }],
  },
  {
    name: 'Third item',
    id: '91262219',
    comments: [
      { body: 'one', color: '#000000', id: '1262219-0' },
      { body: 'two', color: '#683636', id: '91262219-1' },
    ],
  },
];

const Items = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Items</h1>
      <form className={styles.form}>
        <input
          className={styles['item-input']}
          type="text"
          placeholder="Type name here..."
          required
        />
        <button className={styles['add-btn']}>Add New</button>
      </form>
      <ItemsList items={DUMMY_ITEMS} />
    </div>
  );
};

export default Items;
