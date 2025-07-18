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
    userImageContainer:{
        borderColor: '#ff0000ff',
        borderWidth: 2,
        padding: 3,
        borderRadius: 50,
    },
    image:{
        width: 65,
        height: 65,
    },
})

export default style