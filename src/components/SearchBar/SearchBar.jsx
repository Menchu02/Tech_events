import React, { useState } from 'react';
import styles from './searchBar.module.css';
import eventiaCategories from '../../apiService/categoriesService';
import { useEffect } from 'react';

export default function SearchBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    eventiaCategories.getAllCategories().then((data) => setCategories(data));
  }, []);

  return (
    <div className={styles.searchBarContainer}>
      <input
        type='text'
        placeholder='  Search event'
        className={styles.searchInput}
      />
      <select name='categories' className={styles.selectInput}>
        {categories.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <button className={styles.anchorInput}>Location</button>
      <button className={styles.anchorInput}>Calendar</button>
    </div>
  );
}
