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
  errorContainer: {
    width: '100%',
    backgroundColor: '#FFDEDE',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#D8000C',
  },
  errorText: {
    color: '#D8000C',
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
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
    fontWeight: "bold",
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
    fontSize: 16,
    color: '#000',
  },
})