import styles from './TeachersPopular.module.scss';
import teacherImage from './../../public/images/qeybulla.jpg';
import Image from "next/image";
const teachers = [
  {
    id: 1,
    name: 'Qeybulla Aliverdiyev',
    studentCount: 342,
    courseNum: 4,
    img: teacherImage
  },
  {
    id: 1,
    name: 'Qeybulla Aliverdiyev',
    studentCount: 342,
    courseNum: 4,
    img: teacherImage
  },
  {
    id: 1,
    name: 'Qeybulla Aliverdiyev',
    studentCount: 342,
    courseNum: 4,
    img: teacherImage
  },
  {
    id: 1,
    name: 'Qeybulla Aliverdiyev',
    studentCount: 342,
    courseNum: 4,
    img: teacherImage
  }
]
export default function TeachersPopularComponent() {
  return (
    <div className={styles.teachersPopular}>
      <h1>Tanınmış müəllimlər</h1>
      <div className={styles.container}>
        {teachers.map((item, index) => (
          <div key={item.name} className={styles.item}>
            <Image src={item.img} alt={'teacher-image'} />
            <p className={styles.name}>{item.name}</p>
            <p className={styles.additional}>{item.studentCount} tələbə</p>
            <p className={styles.additional}>{item.courseNum} kurs</p>
          </div>
        ))}
      </div>
    </div>
  )
}
