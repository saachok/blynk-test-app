import Item from './Item';

import styles from '../../styles/todo/ItemsList.module.css';

const ItemsList = ({ items, setItems, activeItem, setActiveItem }) => {
  return (
    <ul className={styles['items-list']}>
      {items.map(({ id, name, comments }) => (
        <Item
          {...{ id, name, comments }}
          key={id}
          setItems={setItems}
          activeItem={activeItem}
          onClick={() => setActiveItem(items.find(item => item.id === id))}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
