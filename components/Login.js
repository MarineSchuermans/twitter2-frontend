import styles from '../styles/login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user';
import { useRouter } from 'next/router';

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [signInError, setSignInError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const openModal2 = () => {
    setIsModalOpen2(true);
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [signUpFirstname, setSignUpFirstname] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({_id: data.info._id, firstname: signUpFirstname, username: signUpUsername, token: data.token}));
          setSignUpFirstname('');
					setSignUpUsername('');
					setSignUpPassword('');
				} router.push('/')
			});
	};

	const handleConnection = () => {
    fetch('http://localhost:3000/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: signInUsername, password: signInPassword }),
    }).then(response => response.json())
        .then(data => {
					console.log(data)
            if (data.result) {
                dispatch(login({_id: data.info._id, username: signInUsername, firstname: data.info.firstname, token: data.info.token})); 
                setSignInUsername('');
                setSignInPassword('');
                router.push('/')
            } else {
              setSignInError('Invalid username or password');
          }
        });
};

  let modalContent = (<div className={styles.modalOverlay}>
    <div className={styles.modal}>
      <button onClick={closeModal} className={styles.closeModal}>X</button>
      <FontAwesomeIcon icon={faTwitter} rotation={180} alt="Hackatweet logo" style={{ color: "#ffffff", }} className={styles.logo2} />
      <h2 className={styles.h22}>Create your Hackatweet account</h2>
      <input type="text" placeholder="Firstname" className={styles.input2} onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname}/>
      <input type="text" placeholder="Username" className={styles.input2} onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}/>
      <input type="password" placeholder="Password" className={styles.input2} onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
      <button className={styles.modalSignup} onClick={() => handleRegister()}>Sign up</button>
    </div>
  </div>)

  let modalContent2 = (<div className={styles.modalOverlay}>
    <div className={styles.modal}>
      <button onClick={closeModal2} className={styles.closeModal}>X</button>
      <FontAwesomeIcon icon={faTwitter} rotation={180} alt="Hackatweet logo" style={{ color: "#ffffff", }} className={styles.logo2} />
      <h2 className={styles.h22}>Connect to Hackatweet</h2>
      <input type="text" placeholder="Username" className={styles.input2} onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
      <input type="password" placeholder="Password" className={styles.input2} onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword}/>
      {signInError && <p className={styles.errorMessage}>{signInError}</p>}
      <button className={styles.modalSignup} onClick={() => handleConnection()}>Sign in</button>
    </div>
  </div>)

  return (
    <div className={styles.gridContainer}>
      <img src="back-login.png" alt="Hackatweet" className={styles.imagecontainer} />
      <div className={styles.container}>
        <FontAwesomeIcon icon={faTwitter} rotation={180} alt="Hackatweet logo" style={{ color: "#ffffff", }} className={styles.logo} />
        <h1 className={styles.title}>See what's <br />happening</h1>
        <h2 className={styles.title2}>Join Hackatweet today.</h2>
        <button className={styles.signup} onClick={openModal}>Sign up</button>
        <p className={styles.p}>Aleady have an account?</p>
        <button className={styles.signin} onClick={openModal2}>Sign in</button>
      </div>
      {isModalOpen && modalContent}
      {isModalOpen2 && modalContent2}
    </div>
  );
}

export default Login;