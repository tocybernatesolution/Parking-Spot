import { Appearance, StyleSheet } from "react-native";
// console.log();
const bg=Appearance.getColorScheme()=='light'?"#FFFFFF":"#000000"
export const globalStyles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:bg,
  },
  justifyContent:{
    justifyContent:"center"
  },
  alignItems:{
    alignItems:"center"
  },
  alignSelf:{
    alignSelf:"center"
  }

})