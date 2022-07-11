import { Text } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./WrettingStyles";

export default function Wretting({ name = "TuentyFaiv", lastName }) {
  return (
    <Text style={styles.title}>Hi, {name} {lastName}</Text>
  )
}

Wretting.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string,
}