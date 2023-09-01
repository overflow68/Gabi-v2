
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styles from './page.module.css'
import Intro from './components/intro'
import Sidebar from './components/sidebar'
import About from './components/about'
import Projects from './components/projects';

export default function Home() {
 

  return (
    <main className={styles.main}>
      <Intro/>
      <About/>
      <Sidebar/>
      <Projects/>
    </main>
  )
}
