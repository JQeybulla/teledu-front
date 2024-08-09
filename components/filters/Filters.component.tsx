'use client'
import styles from './Filters.module.scss';
import {useState} from "react";
import {ConfigProvider, Select} from "antd";

const selectOptions = [
  { value: 'az', label: 'Aərcaycanca' },
  { value: 'ru', label: 'Rusca' },
  { value: 'en', label: 'İngiliscə' },
]
const selectOptions2 = [
  { value: 'az', label: 'Əvvəlcə ucuz' },
  { value: 'az', label: 'Əvvəlcə baha' },
  { value: 'ru', label: 'Əvvəlcə yeni' },
  { value: 'en', label: 'Əvvəlcə reytinqli' },
]

export default function FiltersComponent() {
  const [showFilters, setShowFilters] = useState(false);
  const toggleShowFilters = () => {
    setShowFilters((prevState: boolean) => {
      return !prevState;
    })
  }
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

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
          <div className={styles.language}>
            Dil:
            <ConfigProvider
              theme={{
                token: {
                  colorBorder: '#68c2e8',
                  colorPrimaryHover: '#68c2e8',
                  colorPrimary: '#68c2e8'
                }
              }}
            >
              <Select
                defaultValue="Dil seçin"
                style={{ width: 120, height: 40 }}
                onChange={handleChange}
                options={selectOptions}
              />
            </ConfigProvider>
          </div>
          <div className={styles.sorting}>
            Dil:
            <ConfigProvider
              theme={{
                token: {
                  colorBorder: '#68c2e8'
                }
              }}
            >
              <Select
                defaultValue="Reytinqə görə"
                style={{ width: 140, height: 40 }}
                onChange={handleChange}
                options={selectOptions2}
              />
            </ConfigProvider>
          </div>
        </div>}
    </div>
  );
}
