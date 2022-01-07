// styles
import styles from './Navigation.module.css';

// React components
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className={ styles.navbar }>
      <ul>
        <li className={ styles.title }>
          <Link to="/">finance tracker</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  )
}
