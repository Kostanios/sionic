import styles from './styles.module.css'
import {useEffect, useState} from "react";
import search from '../../assets/search.svg'
import loca from '../../assets/loca.svg'
import basket from '../../assets/basket.svg'

const Header = () => {
    const [location, setLocation] = useState('')
    const [serchValue, setSearchValue] = useState('')
    useEffect(() => {
        fetch('https://ipinfo.io/json?token=10b7997bc31673')
            .then(res => res.json())
            .then(data => setLocation(data.city))
    }, [])
    return <header className={styles.header}>
        <span className={styles['react-logo']}>React</span>
        <div className={styles['location-container']}>
            <img src={loca} alt="location"/>
            <span>{location||'Адрес'}</span>
        </div>
        <div className={styles['input-container']}>
            <input
                className={styles.input} value={serchValue}
                onChange={(e) => {setSearchValue(e.target.value)}}
                placeholder="Поиск бренда, товара, категории..."/>
            <div className={styles['icon-container']}>
                <img src={search} alt="search"/>
            </div>
        </div>
        <div className={styles.basket}>
            <img src={basket} alt="basket"/>
        </div>
    </header>
}
export default Header
