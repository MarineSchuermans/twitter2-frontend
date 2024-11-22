import styles from '../styles/Trends.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link';

function Trends() {
  const [trends, setTrends] = useState([]);
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tweet/allTweet')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch trends');
        }
        return response.json();
      })
      .then((data) => {
        setTrends(data.tweets);
      })
      .catch((error) => {
        console.error('Error fetching trends:', error);
      });
  }, []);

  useEffect(() => {
    const hashtagMap = new Map();

    trends.forEach((tweet) => {
      const hashtagsInTweet = tweet.content.match(/#\w+/g);

      if (hashtagsInTweet) {
        hashtagsInTweet.forEach((hashtag) => {
          const lowercaseHashtag = hashtag.toLowerCase();
          hashtagMap.set(
            lowercaseHashtag,
            (hashtagMap.get(lowercaseHashtag) || 0) + 1
          );
        });
      }
    });

    const sortedHashtags = Array.from(hashtagMap.entries()).sort(
      (a, b) => b[1] - a[1]
    );
    setHashtags(sortedHashtags);
  }, [trends]);

  return (
    <div className={styles.trends}>
      <h2 className={styles.title}>Trends</h2>
      <div className={styles.hashtags}>
        {hashtags.map(([hashtag, count]) => (
          <div className={styles.bloc} key={hashtag}>
            <Link href={`/hashtag?tag=${encodeURIComponent(hashtag)}`}>
              <a className={styles.text}>{hashtag}</a>
            </Link>
            <p className={styles.counterHash}>{count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trends;