import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import buttonStyle from '../styles/buttonStyle.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd}`}>
        <p>Hi, I'm Daphne.</p>

        <p>
          I like solving problems with technology and creating things like apps, games, and music.
        </p>
        <section className={buttonStyle.buttonContainer}>
          <Link href="/#super-powers">
            <button className={buttonStyle.buttonFlip} type="button" data-back="About Me" data-front="Read More"></button>
          </Link>
        </section>
      </section>

      <section>
        <div className={utilStyles.headingAlign}>
          <h2 id="super-powers">Super Powers</h2>
        </div>
        <h3 className={`${utilStyles.headingAlign}`}>Languages</h3>
        <ul className={`${utilStyles.list} ${utilStyles.listHeader}`}>
          <li>JavaScript</li>
          <li>C#</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <h3 className={`${utilStyles.headingAlign}`}>Frameworks and Libraries</h3>
        <ul className={`${utilStyles.list} ${utilStyles.listHeader}`}>
          <li>React</li>
          <li>React Native</li>
          <li>Expo.io</li>
        </ul>
      </section>

    </Layout>
  )
}