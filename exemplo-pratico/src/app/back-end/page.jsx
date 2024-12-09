import styles from './back-end.module.css'

export default function FrontEnd (){
    return (
        <div className={styles.body}>
            <section className={styles.secao}>
                <div className={styles.container}>
                    <h1>Back-End</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores tempora velit suscipit neque, repudiandae voluptate impedit architecto, eveniet perferendis molestiae iste excepturi earum ab eaque placeat, corrupti possimus fugiat!</p>
                </div>
            </section>
        </div>
    )
}