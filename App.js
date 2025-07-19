import React from "react";
import { FlatList, SafeAreaView,Text,TouchableNativeFeedback,TouchableOpacity,View } from "react-native";
import {getFontFamily} from "./assets/fonts/helper";
import Title from "./Components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import globalStyle from "./assets/styles/globalStyle"
import { faEnvelope,  } from "@fortawesome/free-solid-svg-icons";
import UserStory from "./Components/UserStory/UserStory";






function App() {
  const userStories =[
    {
      firstname: 'arnav',
      id: 1,
      profileImage: require('./assets/images/pp.jpg')
    },
      {
      firstname: 'Shivi',
      id: 2,
      profileImage: require('./assets/images/default_profile.png')
    },
      {
      firstname: 'Akshat',
      id: 3,
      profileImage: require('./assets/images/default_profile.png')
    },
      {
      firstname: 'Shivansh',
      id: 4,
      profileImage: require('./assets/images/default_profile.png')
    },
      {
      firstname: 'Ansh',
      id: 5,
      profileImage: require('./assets/images/default_profile.png')
    },
      {
      firstname: 'Bhatnagar',
      id: 6,
      profileImage: require('./assets/images/default_profile.png')
    },
      {
      firstname: 'Ayush',
      id: 7,
      profileImage: require('./assets/images/default_profile.png')
    },
      {
      firstname: 'Akshana',
      id: 8,
      profileImage: require('./assets/images/default_profile.png')
    },
      {
      firstname: 'romie',
      id: 9,
      profileImage: require('./assets/images/default_profile.png')
    },
      {
      firstname: 'pranay',
      id: 10,
      profileImage: require('./assets/images/default_profile.png')
    },
  ]
  return (
  <SafeAreaView>
    <View style={globalStyle.header}>
     <Title title={'Lets Explore'} />
     <TouchableOpacity style={globalStyle.messageBox}>
     <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
     <View style={globalStyle.messageNumberContainer}>
      <Text style={globalStyle.messageNumber}>9+</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style = {globalStyle.userStoryContainer}> 
      <FlatList
      showsHorizontalScrollIndicator={false}
        horizontal={true}
       data={userStories} renderItem={({item}) => (
        <UserStory
         firstName={item.firstname} 
      profileImage={item.profileImage}/>
    )}/>
    </View>
  </SafeAreaView>
)}

export default App;
