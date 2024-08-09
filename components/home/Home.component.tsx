import styles from './Home.module.scss';
import Image from "next/image";
import courseImage from './../../public/images/course.jpg';
import courseImage2 from './../../public/images/course2.jpg';
import courseImage3 from './../../public/images/course3.jpg';
import courseImage4 from './../../public/images/course4.jpg';
import courseImage5 from './../../public/images/course5.jpg';
import courseImage6 from './../../public/images/course6.jpg';
import {Rate} from "antd";
import FiltersComponent from "@/components/filters/Filters.component";
import {FilterFilled} from "@ant-design/icons";

const courses = [
  {id: 1, name: 'Frontend təlimi', image: courseImage},
  {id: 2, name: 'Backend təlimi', image: courseImage2},
  {id: 3, name: 'UI/UX təlimi', image: courseImage3},
  {id: 4, name: 'Mobil proqramlaşdırma', image: courseImage4},
  {id: 5, name: 'Frontend təlimi', image: courseImage5},
  {id: 6, name: 'Backend təlimi', image: courseImage6},
  {id: 7, name: 'UI/UX təlimi', image: courseImage},
  {id: 8, name: 'Mobil proqramlaşdırma', image: courseImage2},
]

export default function HomeComponent() {
  return (
    <div className={`${styles.homeContainer} px-20 py-10`}>
      <h1 className={styles.header}>Populyar kurslar</h1>
      <FiltersComponent />
      <div className={`${styles.home} grid grid-cols-4 gap-8 py-4`}>
        {courses.map((item, index) => (
          <div key={item.id} className={`${styles.course}`}>
            <Image src={item.image} alt={'image'} />
            <div className={styles.content}>
              <h1 className={styles.title}>{item.name}</h1>
              <p className={styles.author}>Qeybulla Aliverdiyev</p>
              <p className={styles.date}>20 Avqust - 6 ay</p>
              <div className={styles.rating}>
                <p className={styles.ratingNum}>4.7</p>
                <Rate disabled allowHalf defaultValue={4.7} />
                <p>(24)</p>
              </div>
              <p className={styles.price}>100 <span>&#8380;</span> / ay</p>
              <p className={styles.learnMore}>Ətraflı</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
