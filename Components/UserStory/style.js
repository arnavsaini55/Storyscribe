import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
    storyContainer:{
        marginRight: 20,
    },
    firstName:{
        fontFamily: getFontFamily('Inter_24pt-SemiBold','500'),
        fontSize:15,
        color: '#022150',
        marginTop: 8,
        textAlign: 'center',
    },
    
})

export default style