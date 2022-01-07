// styles
import styles from './Signup.module.css';

// React components & hooks
import { useState } from 'react';

// App hooks
import { useSignup } from '../../hooks/useSignup';

export default function Signup() {
  // hooks
  const { signup, error, isPending } = useSignup();

  // states
  const [ displayName, setDisplayName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    
    signup(email, password, displayName);

    console.log(isPending);
  }

  return (
    <form className={ styles["signup-form"]} onSubmit={ handleSubmit }>
      <h2>signup</h2>
      <label>
        <span>display name:</span>
        <input 
          type="text"
          onChange={ (e) => setDisplayName(e.target.value) }
        />
      </label>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      { !isPending && <button className="btn">Sign up</button> }
      { isPending && <button disabled className="btn">Loading...</button> }
    </form>
  )
}
