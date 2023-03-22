import styles from './cards.module.css'
import img1 from './pexels-andrea-piacquadio-3760263.jpeg'
import img2 from './pexels-andrea-piacquadio-3768116.jpeg'
import img3 from './pexels-christina-morillo-1181391.jpeg'
import img4 from './pexels-christina-morillo-1181678.jpeg'
import img5 from './pexels-dinielle-de-veyra-4195342.jpeg'

export function Cards(){

    return(
        <div className={styles.container}>
        <div className={styles.card}>
            <div>
            <img src={img1} className={styles.image}></img>
            </div>
            
            <label className={styles.name}>John Smith</label><br/>
            <label className={styles.designation}>Frontend Developer</label><br/>
            <label className={styles.exp}>4 Yrs Exp</label>
        </div>
        <div className={styles.card}>
            <div>
            <img src={img2} className={styles.image}></img>
            </div>
            
            <label className={styles.name}>Leslie Alexander</label><br/>
            <label className={styles.designation}>Frontend Developer</label><br/>
            <label className={styles.exp}>4 Yrs Exp</label>
        </div>
        <div className={styles.card}>
            <div>
            <img src={img3} className={styles.image}></img>
            </div>
            
            <label className={styles.name}>Robert Frost</label><br/>
            <label className={styles.designation}>Frontend Developer</label><br/>
            <label className={styles.exp}>4 Yrs Exp</label>
        </div>
        <div className={styles.card}>
            <div>
            <img src={img4} className={styles.image}></img>
            </div>
            
            <label className={styles.name}>Taylor Alfred</label><br/>
            <label className={styles.designation}>Frontend Developer</label><br/>
            <label className={styles.exp}>4 Yrs Exp</label>
        </div>
        <div className={styles.card}>
            <div>
            <img src={img5} className={styles.image}></img>
            </div>
            
            <label className={styles.name}>William Young</label><br/>
            <label className={styles.designation}>Frontend Developer</label><br/>
            <label className={styles.exp}>4 Yrs Exp</label>
        </div>
       
        </div>

    )
}