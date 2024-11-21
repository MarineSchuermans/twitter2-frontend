import Tweet from './Tweet';
import styles from '../styles/Trends.module.css';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Home from './Home';

function Hashtags() {
  const trends = useSelector((state) => state.trends);

  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter Trends</title>
      </Head>
      <Home />
      <h2 className={styles.title}>Trending Topics</h2>
      <div className={styles.trendsList}>
        {/* {trends.map((trend) => (
          <div key={trend.id} className={styles.trend}>
            <h3>{trend.name}</h3>
            <p>{trend.description}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Hashtags;