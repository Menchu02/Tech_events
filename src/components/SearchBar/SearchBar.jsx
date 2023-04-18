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
        {/* <option value=''> Categories</option>
        <option value='opcion1'>Bussines</option>
        <option value='opcion2'>Cultural</option>
        <option value='opcion3'>Educational</option>
        <option value='opcion3'>Social</option>
        <option value='opcion3'>Sports</option> */}
      </select>
      <button className={styles.anchorInput}>Location</button>
      <button className={styles.anchorInput}>Calendar</button>
    </div>
  );
}
