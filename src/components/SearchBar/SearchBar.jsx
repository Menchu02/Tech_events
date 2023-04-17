import React from 'react';
import styles from './searchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <input
        type='text'
        placeholder='  Search event'
        className={styles.searchInput}
      />
      <select className={styles.selectInput}>
        <option value=''> Categories</option>
        <option value='opcion1'>Bussines</option>
        <option value='opcion2'>Cultural</option>
        <option value='opcion3'>Educational</option>
        <option value='opcion3'>Social</option>
        <option value='opcion3'>Sports</option>
      </select>
      <button className={styles.anchorInput}>Location</button>
      <button className={styles.anchorInput}>Calendar</button>
    </div>
  );
}
