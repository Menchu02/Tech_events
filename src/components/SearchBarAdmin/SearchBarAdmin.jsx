import React from 'react';
import styles from './searchBarAdmin.module.css';

export default function SearchBarAdmin({ filterEventByName, searchInput }) {
  return (
    <div>
      <div className={styles.searchBarContainer}>
        <input
          type='text'
          placeholder='  Search event'
          className={styles.searchInput}
          onChange={filterEventByName}
          value={searchInput}
        />
      </div>
    </div>
  );
}
