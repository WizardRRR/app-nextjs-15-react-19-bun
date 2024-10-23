import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Hello, Next.js!</h1>
      <p className={styles.description}>
        Get started by editing <code>app/page.tsx</code>
      </p>
    </div>
  )
}
