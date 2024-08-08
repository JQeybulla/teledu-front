'use client'
import styles from './Categories.module.scss';



export default function CategoryComponent() {
  return (
    <>
      <div className={styles.categories}>
        <p>Proqramlaşdırma</p>
        <p>Xarici dil</p>
        <p>Abituriyent</p>
        <p>Magistraturaya hazırlıq</p>
        <p>Biznes</p>
      </div>
    </>
  )
}
