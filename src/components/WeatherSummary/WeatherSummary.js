import styles from './WeatherSummary.module.scss';

const WeatherSummary = ({ ...weather }) => {
  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt={`${weather.description}`}
        src={`${process.env.PUBLIC_URL}/images/weather-icons/${weather.icon}.png`} />
      <div className={styles.weatherInfo}>
        <h2>{weather.city}</h2>
        <p>
          <strong>Temp: {weather.temp}° </strong>
        </p>
        <p>
          <strong>Description: {weather.description}</strong>
        </p>
      </div>
    </section>
  );
};

export default WeatherSummary;