import { Link } from 'react-router-dom';
import Styles from './Header.module.css';
import { LoadingContext } from '../../context/LoadingContext';
import { useContext } from 'react';

const Header = () => {
  const loadingContext = useContext(LoadingContext);

  const { isLoading } = loadingContext!;
  return (
    <div className={Styles.container}>
      <div className={Styles.redirection}>
        <h2>
          <Link to={'/'}>Podcaster</Link>
        </h2>
      </div>
      {isLoading && (
        <span className={Styles.loader} data-testid="loader"></span>
      )}
    </div>
  );
};

export default Header;
