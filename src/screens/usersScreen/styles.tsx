import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E3939'
  },
  flatList: {
    flex: 1,
    margin: 20,
    marginTop: 20,
    width: "100%",
    alignSelf: "center",
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
    fontSize: 18,
    fontWeight: "400",
  },
  footer: {
    padding: 16,
    alignItems: "center",
  },
  entrarButton: {
    backgroundColor: '#76AB3E',
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    width: "80%",
    marginBottom: 40
  },
  entrarButtonDisabled: {
    backgroundColor: '#A9A9A9',
  },
  entrarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'GeistMono-SemiBold',
  },
  filtroContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  filtroInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    fontFamily: 'GeistMono-SemiBold',
    fontSize: 16,
    color: '#000',
  },
})
