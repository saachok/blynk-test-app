import { useState } from 'react';

import { getRandomId } from '../../functions/dataHandling';

import styles from '../../styles/todo/Items.module.css';
import ItemsList from './ItemsList';

const Items = ({ items, setItems, activeItem, setActiveItem }) => {
  const [textInput, setTextInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setItems(prev => {
      return [
        ...prev,
        {
          name: textInput,
          id: getRandomId().toString(),
          comments: [],
        },
      ];
    });

    setTextInput('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Items</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          value={textInput}
          onChange={e => setTextInput(e.target.value)}
          className={styles['item-input']}
          type="text"
          placeholder="Type name here..."
          required
        />
        <button type="submit" className={styles['add-btn']}>
          Add New
        </button>
      </form>
      <ItemsList
        activeItem={activeItem}
        items={items}
        setItems={setItems}
        setActiveItem={setActiveItem}
      />
    </div>
  );
};

export default Items;
