import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: "#236ed4",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    height: 40,
  },
  appTitle: {
    fontSize: 20,
    color: "white",
    marginLeft: 5,
  },
  image: {
    height: 70,
    width: 70,
  },
  haveAccountBox: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomColor: "#C0C0C0",
    borderBottomWidth: 0.2,
  },
  part1: {
    color: "#ababab",
  },
  part2: {
    color: "#3575c0",
  },
  ad: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
  form: {
    paddingHorizontal: 50,
    marginTop: 10,
  },
  icon: {
    marginRight: 5,
  },
  inputField:{
    flex: 1
  },
  inputBox: {
    flexDirection: "row",
    borderColor: "#ababab",
    borderWidth: 1,
    padding: 8,
    marginTop: 8,
    marginBottom: 8,
    alignItems: "center",
  },
  inputBoxTapped: {
    flexDirection: "row",
    borderColor: '#236ed4',
    borderWidth: 1,
    padding: 8,
    marginTop: 8,
    marginBottom: 8,
    alignItems: "center",
  },
  yourData: {
    marginTop: 5,
    fontSize: 13,
  },
  checkboxBox: {
    flexDirection: "row",
    marginTop: 20,
  },
  tandc: {
    marginLeft: 5,
  },
  clickable: {
    color: "#3575c0",
    textDecorationLine: "underline",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#236ed4",
    paddingVertical: 12,
    marginTop: 20,
  },
  btnTitle: {
    color: "white",
    fontSize: 16,
  },
  orsignin: {
    color: "#ababab",
    fontSize: 15,
    textAlign: "center",
    marginVertical: 30,
  },
  socialBox: {
    flexDirection: "row",
    marginHorizontal: 70,
    marginTop: 15,
    marginBottom: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  google: {
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0.1,
    elevation: 1,
    
  },
  googleText: {
    fontSize: 12,
    opacity: 0.6,
    color: "#36454f",
    fontWeight: "bold",
    marginLeft: 10,
  },
  SocialImg: {
    height: 25,
    width: 25,
  },
  dropDown: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#ababab",
    marginTop: 8,
    marginBottom: 8,
  },
  dropDownSelected: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#236ed4",
    marginTop: 8,
    marginBottom: 8,
  },
  placeholderStyle: {
    color: "#ababab",
    fontSize: 15,
  },
  iconStyle: {
    marginRight: 5
  }
});

export default styles;
