import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 15
  },
  cardContent: {
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  cardNumber: {
    position: "absolute",
    color: "white",
    fontSize: 11,
    top: 10,
    right: 10
  },
  cardType: {
    position: "absolute",
    color: "white",
    fontSize: 11,
    top: 10,
    left: 10
  },
  cardTitle: {
    width: "100%",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    textTransform: "capitalize"
  },
  cardImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});