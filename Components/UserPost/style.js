import React from "react";
import { StyleSheet } from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
    userProfile:{
    flexDirection: 'row', 
    alignItems: 'center' ,
},
userTextContainer:{
     marginLeft: 10 
},
user:{
    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
},
userProfileContainer:{
    fontFamily: getFontFamily('Inter_28pt-BoldItalic.ttf','800 ')
},
location:{
    color:'#79869F',
    fontFamily:getFontFamily('Inter_18pt-BoldItalic.ttf',500),
    fontSize:13,
    marginTop:4
},
 videoBox:{
    
    width: '100%', height: 250 
      
 },
 userpost:{
    alignItems:'center',
    flexDirection:'row',
    marginVertical:15,
    justifyContent:'center',
    
    
 },
 userfull:{
    marginTop:35,
    borderBottomWidth:1,
    paddingBottom:20,
    borderBottomColor:'#EFF2F6'
 },
 inputSection:{
    flexDirection: 'row',
    justifyContent:'flex-start',
    marginLeft:27
    
 },
 commentSection:{
    color:'#79869F'
 },
 UserSection:{
    flexDirection:'row',
 }
});


export default style;