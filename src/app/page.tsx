import {Inter} from 'next/font/google';
import styles from './page.module.css';
import MainPage from './components/MainPage';

const inter = Inter({subsets: ['latin']});

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPage />
    </main>
  );
}
