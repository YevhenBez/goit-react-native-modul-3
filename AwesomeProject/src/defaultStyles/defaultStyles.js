import { StyleSheet } from "react-native";

export const formwrapWithoutKeyboard = [{ paddingBottom: 66 }];

export const formwrapForKeyboard = [{ paddingBottom: 0 }];

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  formwrap: {
    paddingHorizontal: 16,
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  header: {
    marginBottom: 33,

    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },

  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 8,

    fontSize: 16,
    lineHeight: 19,
  },

  createPublicationInput: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,

    fontSize: 16,
    lineHeight: 19,
  },

  greyText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    paddingTop: 8,
    paddingBottom: 33,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#FF6C00",
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    marginTop: 27,
  },

  buttonText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#ffffff",
  },

  isExistAccount: {
    alignItems: "center",
    marginTop: 16,
  },

  isExistAccountText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  showPassButton: {
    position: "absolute",
    right: 16,
    paddingVertical: 15,
  },

  showPassAreaText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  underlineText: {
    textDecorationLine: "underline",
  },

  inputForPassword: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,

    fontSize: 16,
    lineHeight: 19,
  },

  inputHidden: {
    height: 40,
    borderWidth: 0,
    borderRadius: 0,

    fontSize: 16,
  },
});
