import styles from './Pagination.module.scss';

export default function PaginationComponent() {
  return (
    <div className={`${styles.pagination}`}>
      <div className={`${styles.item} ${styles.active}`}>1</div>
      <div className={styles.item}>2</div>
      <div className={styles.item}>3</div>
      <div className={styles.item}>4</div>
      <div className={styles.item}>5</div>
      <div style={{color: '#68c2e8'}}>{`->`}</div>
    </div>
  )
}
