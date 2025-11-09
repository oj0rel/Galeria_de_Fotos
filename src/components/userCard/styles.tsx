import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pressContent: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
    padding: 10,
    marginHorizontal: 20,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F4BF9B',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    color: '#fff',
  },
  image: {
    width: 30,
    height: 30,
  },
  pressText: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 15,
  },
  pressContentSelected: {
    borderColor: '#FFDEDE',
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 122, 255, 0.05)'
  }
})
