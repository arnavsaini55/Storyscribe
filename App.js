import React from "react";
import { SafeAreaView,Text,TouchableOpacity,View } from "react-native";
import {getFontFamily} from "./assets/fonts/helper";
import Title from "./Components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import globalStyle from "./assets/styles/globalStyle"
import { faEnvelope,  } from "@fortawesome/free-solid-svg-icons";


function App() {
  return <SafeAreaView>
    <View style={globalStyle.header}>
     <Title title={'Lets Explore'} />
     <TouchableOpacity style={globalStyle.messageBox}>
     <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
     <View style={globalStyle.messageNumberContainer}>
      <Text style={globalStyle.messageNumber}>9+</Text>
        </View>
      </TouchableOpacity>
    </View>
  </SafeAreaView>;
}

export default App;
