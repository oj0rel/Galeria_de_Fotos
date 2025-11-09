import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E3939',
  },
  flatList: {
    flex: 1,
    margin: 20,
    marginTop: 20,
    width: "100%",
    alignSelf: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    width: "90%",
  },
  modalImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: '#fff'
  },
  closeButton: {
    backgroundColor: '#F4BF9B',
    padding: 12,
    borderRadius: 8,
    width: "50%",
    alignItems: "center",
  },
  closeButtonText: {
    color: '#000000',
    fontWeight: "bold",
  },
})