import styles from '../../styles/todo/Item.module.css';

const Item = ({ id, name, comments, setItems, activeItem, onClick }) => {
  const handleDelete = () => {
    setItems(prevState => prevState.filter(item => item.id !== id));
  };
  return (
    <li
      className={`${styles.container} ${
        id === activeItem.id ? styles.active : ''
      }`}
      onClick={onClick}
    >
      <div className={styles.info}>
        <p>{name}</p>
        <span className={styles.counter}>{comments.length}</span>
      </div>
      <button onClick={handleDelete} className={styles['delete-btn']}>
        Delete
      </button>
    </li>
  );
};

export default Item;
