// styles
import styles from './Login.module.css';

// React components & hooks
import { useState } from 'react';

// App hooks
import { useLogin } from '../../hooks/useLogin';

export default function Login() {
  // hooks
  const { login, error, isPending } = useLogin();

  // states
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  }

  return (
    <form onSubmit={ handleSubmit } className={ styles["login-form"] }>
      <h2>login</h2>
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
      <button className="btn">Log in</button>
    </form>
  )
}
