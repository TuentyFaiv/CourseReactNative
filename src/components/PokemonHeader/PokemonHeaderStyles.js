import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "hidden"
  },
  bg: {
    position: "absolute",
    width: "100%",
    height: 400,
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
    left: 0,
    right: 0
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 27,
    textTransform: "capitalize"
  },
  order: {
    color: "white",
    fontWeight: "bold",
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
    alignSelf: "center"
  }
});
