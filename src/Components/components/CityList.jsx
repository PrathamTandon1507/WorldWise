import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import PropTypes from "prop-types"; // Import PropTypes
import Message from "./Message";
// /* eslint-disable react/prop-types */

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map!" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
CityList.propTypes = {
  cities: PropTypes.array.isRequired, // cities should be an array and is required
  isLoading: PropTypes.bool.isRequired, // isLoading should be a boolean and is required
};

export default CityList;
