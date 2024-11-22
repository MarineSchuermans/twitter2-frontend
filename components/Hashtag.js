import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import styles from '../styles/Hashtag.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Trends from '../components/Trends'

function Hashtag() {
  const [input, setInput] = useState('');
  const [tweets, setTweets] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter(); 

  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    if (router.query.tag) {
      const tag = router.query.tag.startsWith('#')
        ? router.query.tag
        : `#${router.query.tag}`;
      setInput(tag);
      fetchData(tag);
    }
  }, [router.query.tag]);

  const fetchData = (value) => {
    fetch(`http://localhost:3000/tweet/allTweet`)
      .then((response) => response.json())
      .then((data) => {
        const filteredTweets = data.tweets.filter((tweet) =>
          tweet.content.toLowerCase().includes(value.toLowerCase())
        );
        setTweets(filteredTweets);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleLogout = () => {
    dispatch(logout());
    return;
  };

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.logoTwitter}>
          <FontAwesomeIcon
            icon={faTwitter}
            rotation={180}
            style={{ color: '#ffffff' }}
            className={styles.twitter}
          />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userLogo}>
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: '#ffffff' }}
              className={styles.userImg}
            />
          </div>
          <div>
            <p>{user.firstname}</p>
            <p>@{user.username}</p>
            <Link href="/login">
              <button onClick={() => handleLogout()} type="button">
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>

      <hr />

      <div className={styles.middle}>
        <h2 className={styles.home}>Hashtag</h2>
        <input
          type="text"
          placeholder="Search"
          className={styles.writeTweet}
          maxLength="280"
          value={input}
          onChange={(e) =>
            handleChange(
              e.target.value.startsWith('#') ? e.target.value : `#${e.target.value}`
            )
          }
        />
        <hr />
        {tweets.map((tweet) => (
          <div key={tweet._id}>
            <div className={styles.lastTweet}>
              <div className={styles.userInfo2}>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: '#ffffff' }}
                  className={styles.icone}
                />
                <div className={styles.typo}>
                  <p className={styles.name}>{tweet.user.firstname}</p>
                  <p className={styles.infos}>@{tweet.user.username}</p>
                  <p className={styles.infos}>2 hours</p>
                </div>
              </div>
              <div>
                <p className={styles.text}>{tweet.content}</p>
                <div className={styles.likes}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: '#ffffff' }}
                    className={styles.heart}
                  />
                  <p className={styles.counter}>{tweet.likes.length}</p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>

      <hr />

      <div className={styles.right}>
        <Trends />
      </div>
    </div>
  );
}

export default Hashtag;