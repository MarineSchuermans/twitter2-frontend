import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Tweet from './Tweet'
import LastTweet from './LastTweets';
import Trends from './Trends';
import Home from './Home';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';

function Hashtag() {
  const [input, setInput] = useState("");
  const [tweets, setTweets] = useState([]);

  const fetchData = (value) => {
    fetch(`http://localhost:3000/tweet/allTweet`)
      .then(response => response.json())
      .then(data => {
        const filteredTweets = data.tweets.filter((tweet) =>
          tweet.content.toLowerCase().includes(value)
        );
        setTweets(filteredTweets);
        console.log(data.tweets)
      });
  };

      const handleChange = (value) => {
        setInput(value);
        fetchData(value);
      };
  
  return (
  <div className = {styles.main}>
    
      <div className={styles.left}>
      <div className={styles.logoTwitter}>
        <FontAwesomeIcon icon={faTwitter} rotation={180} style={{color: "#ffffff",}} className={styles.twitter} />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userLogo}>
          <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} className={styles.userImg} />
          </div>
            <div> 
                <p>Pseudo</p>
                <p>@username</p>
                <button type='button'>Logout</button>
            </div></div>
      </div> 
    
        <hr />


    <div className={styles.middle}> 
    <h2 className={styles.home}> Hashtag </h2>
        <input type= 'text' placeholder="Search" className={styles.writeTweet} maxLength='280' value={input}
        onChange={(e) => handleChange(e.target.value)}/>
        <hr/>
        {tweets.map((tweet) => (
          <LastTweet key={tweet._id} tweet={tweet} />
        ))}
    </div>

    <hr/>

    <div className={styles.right}>

      <Trends />
    </div>

  </div>


  );
}

export default Hashtag;