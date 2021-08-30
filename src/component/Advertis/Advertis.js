import styles from './styles.module.css'
import classNames from "classnames";

const Advertis = () => {
    return(
        <div className={styles.container}>
            <div className={classNames(styles.promotion, styles.item )}>
                <div className={styles['promotion-image']}>
                    <img className={styles.image} src="advertis.png"/>
                </div>
                <div className={styles['promotion-item']}>
                    <h1 className={styles['promotion-header']}>Получай товары БЕСПЛАТНО!</h1>
                    <a className={styles['promotion-link']}>Узнать подробнее</a>
                </div>
            </div>
            <div className={styles.item}>
                <a>Новая коллекция</a>
            </div>
            <div className={styles.item}>
                <a>Новая коллекция</a>
            </div>
            <div className={styles.item}>
                <a>Новая коллекция</a>
            </div>
        </div>
    )
}

export default Advertis
