
import styles from './ErrorBox.module.scss';

const ErrorBox = () => {
  return (
    <div className={styles.errorBox}>
      <h1>
        <span className="fa fa-exclamation-triangle" />
        Error
      </h1>
      <p>
        <strong>There is no such city!</strong>
      </p>
    </div>
  );
};


export default ErrorBox;