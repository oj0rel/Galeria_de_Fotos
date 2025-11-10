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
    fontFamily: 'GeistMono-SemiBold',
    fontSize: 16,
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
    fontFamily: 'GeistMono-SemiBold',
  },
  containerError: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#3E3939',
  },
  textError: {
    color: '#D8000C',
    textAlign: "center",
    fontFamily: 'GeistMono-SemiBold',
    fontSize: 16,
    fontWeight: "400",
  },
})
