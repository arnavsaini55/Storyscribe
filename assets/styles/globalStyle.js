import { StyleSheet } from "react-native";
import { getFontFamily } from "../fonts/helper";

const globalStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  messageBox: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: '#F9FAFB',
    
  },
  messageNumberContainer: {
    backgroundColor:'#F35BAC',
    justifyContent:'center',
    flexDirection:'row',
    width:13,
    height:10,
    borderRadius:10,
    alignItems:'center',
    position:'absolute',
    right:12,
    top:15
  },
  messageNumber:{
    color:'#FFFFFF',
    fontSize: 7,
    fontFamily: getFontFamily('inter_24pt-SemiBold','700')
  },
  userStoryContainer:{
    marginTop:20,
    marginHorizontal: 28,
  }
});


export default globalStyle;