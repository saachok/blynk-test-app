import Item from './Item';

import styles from '../../styles/todo/ItemsList.module.css';

const ItemsList = ({ items }) => {
  return (
    <ul className={styles['items-list']}>
      {items.map(({ id, name, comments }) => (
        <Item {...{ name, comments }} key={id} />
      ))}
    </ul>
  );
};

export default ItemsList;
