import Item from './Item';

import styles from '../../styles/todo/ItemsList.module.css';

const ItemsList = ({ items, setItems, activeItem, setActiveItem }) => {
  return (
    <ul className={styles['items-list']}>
      {items.map(({ id, name, comments }, index) => (
        <Item
          {...{ id, name, comments }}
          key={id}
          setItems={setItems}
          activeItem={activeItem}
          onClick={() => setActiveItem(items[index])}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
