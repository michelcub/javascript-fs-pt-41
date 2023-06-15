import styles from './Layout.module.css'

export default function Layout ({ children }) {
    return(
        <>
            <nav className={styles.navbar} />
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer} />
        </>
    );
}