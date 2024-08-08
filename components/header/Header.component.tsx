import styles from './Header.module.scss';
import logoImg from './../../public/images/Teledu_logo-removebg-preview.svg';
import Image from "next/image";
import {symlinkSync} from "fs";


export default function HeaderComponent() {
  return (
    <div className={`${styles.header} flex justify-between px-10`}>
      <div className={styles.logo}>
        <Image src={logoImg} alt=""/>
      </div>
      <div className={`${styles.search} flex items-center`}>
        <input type="text" placeholder='Axtar'/>
      </div>
      <div className={`${styles.navs} flex gap-10 items-center`}>
        <p className={styles.nav}>Home</p>
        <p className={styles.nav}>Courses</p>
        <p className={styles.nav}>Teachers</p>
        <p className={styles.nav}>Blog</p>
        <button className={`${styles.contactButton} p-2`}>Müəllim hesabı -></button>
      </div>
    </div>
  )
}
