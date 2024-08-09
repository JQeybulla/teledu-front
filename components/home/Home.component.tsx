import styles from './Home.module.scss';
import Image from "next/image";
import courseImage from './../../public/images/course.jpg';
import courseImage2 from './../../public/images/course2.jpg';
import courseImage3 from './../../public/images/course3.jpg';
import courseImage4 from './../../public/images/course4.jpg';
import courseImage5 from './../../public/images/course5.jpg';
import courseImage6 from './../../public/images/course6.jpg';
import {Pagination, Rate} from "antd";
import FiltersComponent from "@/components/filters/Filters.component";
import PaginationComponent from "@/components/pagination/Pagination.component";
import Link from "next/link";

const courses = [
  {id: 1, name: 'Frontend təlimi', image: courseImage, slug: 'frontend-telimi'},
  {id: 2, name: 'Backend təlimi', image: courseImage2, slug: 'backend-telimi'},
  {id: 3, name: 'UI/UX təlimi', image: courseImage3, slug: 'personal-development-telimi'},
  {id: 4, name: 'Mobil proqramlaşdırma', image: courseImage4, slug: 'frontend-telimi'},
  {id: 5, name: 'Frontend təlimi', image: courseImage5, slug: 'frontend-telimi'},
  {id: 6, name: 'Backend təlimi', image: courseImage6, slug: 'backend-telimi'},
  {id: 7, name: 'UI/UX təlimi', image: courseImage, slug: 'ui-ux-telimi'},
  {id: 8, name: 'Mobil proqramlaşdırma', image: courseImage2, slug: 'mobile-telimi'},
]

export default function HomeComponent() {
  return (
    <div className={`${styles.homeContainer} px-20 py-10`}>
      <h1 className={styles.header}>Populyar kurslar</h1>
      <FiltersComponent />
      <div className={`${styles.home} grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-12 2xl:grid-cols-5 py-4`}>
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
              <Link href={`/courses/${item.slug}`}>
                <p className={styles.learnMore}>Ətraflı</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <PaginationComponent />
    </div>
  )
}
