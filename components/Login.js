import styles from '../styles/login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useState } from'react';

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  let modalContent = (<div className={styles.modalOverlay}>
    <div className={styles.modal}>
    <button onClick={closeModal}>X</button>
    <FontAwesomeIcon icon={faTwitter} rotation={180} alt="Hackatweet logo" style={{ color: "#ffffff", }} />
      <h2>Create your Hackatweet account</h2>
      <input type="text" placeholder="Firstname" className={styles.input2} />
      <input type="text" placeholder="Username" className={styles.input2} />
      <input type="password" placeholder="Password" className={styles.input2} />
      <button className={styles.modalSignup}>Sign up</button>
    </div>
  </div>)

  return (
    <div className={styles.gridContainer}>
      <img src="back-login.png" alt="Hackatweet" className={styles.imagecontainer} />
      <div className={styles.container}>
        <FontAwesomeIcon icon={faTwitter} rotation={180} alt="Hackatweet logo" style={{ color: "#ffffff", }} className={styles.logo} />
        <h1 className={styles.title}>See what's <br />happening</h1>
        <h2 className={styles.title}>Join Hackatweet today.</h2>
        <button className={styles.signup} onClick={openModal}>Sign up</button>
        <p className={styles.p}>Aleady have an account?</p>
        <button className={styles.signin}>Sign in</button>
      </div>
      {isModalOpen && modalContent}
    </div>
  );
}

export default Login;