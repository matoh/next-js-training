import Head from 'next/head';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

/**
 * Server-Side Rendering
 * @param context
 * @returns {Promise<{props: {}}>}

export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
 */

/**
 * Static Site Generation
 * @returns {Promise<{props: {allPostsData}}>}
 */
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>John</p>
        <p>Next.js Learning project</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
