import Styles from './NoResult.module.css';

const NoResult = () => {
  return (
    <div className={Styles.container} data-testid="no-result-container">
      <h1 className={Styles.text}>
        No results found, search again or reload the page
      </h1>
    </div>
  );
};

export default NoResult;
