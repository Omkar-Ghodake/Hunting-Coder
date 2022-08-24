import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={ styles.navbar }>
        <ul className={ styles.navList }>
          <a href="/"><li className={ styles.navItem }>Home</li></a>
          <a href="/"><li className={ styles.navItem }>Blogs</li></a>
          <a href="/"><li className={ styles.navItem }>About</li></a>
          <a href="/"><li className={ styles.navItem }>Contact</li></a>
        </ul>
      </nav>

      <main className={ styles.main }>
        <h1 className={ styles.title }>
          Hunting Coder
        </h1>

        <p className={ styles.description }>
          A blog for Hunting Coders by a Hunting Coders
        </p>

        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blog-item">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>Javascript is the language used to design logic for the web.</p>
          </div>

          <div className="blog-item">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>Javascript is the language used to design logic for the web.</p>
          </div>

          <div className="blog-item">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>Javascript is the language used to design logic for the web.</p>
          </div>

          <div className="blog-item">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>Javascript is the language used to design logic for the web.</p>
          </div>
        </div>
      </main>

      <footer className={ styles.footer }>

      </footer>
    </div>
  )
}
