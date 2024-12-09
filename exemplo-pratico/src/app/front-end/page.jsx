import styles from './front-end.module.css'

export default function FrontEnd (){
    return (
        <section className={styles.body}>
            <div className={styles.secao}>
                <div className={styles.container}>
                    <h1>Front-End</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores tempora velit suscipit neque, repudiandae voluptate impedit architecto, eveniet perferendis molestiae iste excepturi earum ab eaque placeat, corrupti possimus fugiat!</p>
                </div>
            </div>
        </section>
    )
}