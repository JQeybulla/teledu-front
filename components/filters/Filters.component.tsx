'use client'
import styles from './Filters.module.scss';
import {useState} from "react";
export default function FiltersComponent() {
  const [showFilters, setShowFilters] = useState(false);
  const toggleShowFilters = () => {
    setShowFilters((prevState: boolean) => {
      return !prevState;
    })
  }
  return (
    <div className={styles.filtersContainer}>
      <p className={styles.filter} onClick={toggleShowFilters}>
        Filterlər {showFilters ? '<-' : '->'}
      </p>
      {showFilters &&
        <div className={`${styles.filters}`}>
          <div className={styles.price}>
            <p>Qiymət: </p>
            <input type="text" placeholder='Min'/>
            -
            <input type="text" placeholder='Max'/>
          </div>
        </div>}
    </div>
  );
}
