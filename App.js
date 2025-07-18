import React from "react";
import { SafeAreaView,Text } from "react-native";
import {getFontFamily} from "./assets/fonts/helper";
import Title from "./Components/Title/Title";


function App() {
  return <SafeAreaView>
    <Title title={'Lets Explore'} />
  </SafeAreaView>;
}

export default App;
