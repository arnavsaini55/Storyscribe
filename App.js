import {React,useEffect,useState} from "react";
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
  ];
  const userPosts =[
    {
      firstName: 'arnav',
      lastname: 'Saini',
      Location: 'Bali',
      Likes:'12002',
      comment:'244',
      share:'12',
      id:'1'
    },
    {
      firstName: 'Shivi',
      lastname: 'Gupta',
      Location: 'Gurugram',
      Likes:'132',
      comment:'24',
      share:'-',
      id:'2'
    },
    {
      firstName: 'Shivansh',
      lastname: 'Dixit',
      Location: 'Noida',
      Likes:'120023',
      comment:'2433',
      share:'10',
      id:'3'
    },
    {
      firstName: 'Akshat',
      lastname: '',
      Location: 'DelhiNCr',
      Likes:'12',
      comment:'4',
      share:'1',
      id:'4'
    },
    {
      firstName: 'Bhatnagar',
      lastname: 'Priyasnhu',
      Location: 'Lucknow',
      Likes:'120',
      comment:'4',
      share:'3',
      id:'5'
    },
    {
      firstName: 'arnav',
      lastname: 'Saini',
      Location: 'Bali',
      Likes:'12002',
      comment:'244',
      share:'12',
      id:'6'
    },
    {
      firstName: 'arnav',
      lastname: 'Saini',
      Location: 'Bali',
      Likes:'12002',
      comment:'244',
      share:'12',
      id:'7'
    },
    {
      firstName: 'arnav',
      lastname: 'Saini',
      Location: 'Bali',
      Likes:'12002',
      comment:'244',
      share:'12',
      id:'8'
    },
  ];
const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 4;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);


  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);
  }, []);

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
      onEndReachedThreshold={0.5}
      onEndReached={()=>{
        if(isLoadingUserStories){
          return;
        }
        setIsLoadingUserStories(true)
        const contentToAppend = pagination(userStories,+1,userStoriesPageSize);
        if(contentToAppend.length>0){
          setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
          setUserStoriesRenderedData(prev => [...prev,...contentToAppend]);
        }
      }}
      showsHorizontalScrollIndicator={false}
        horizontal={true}
       data={userStories} renderItem={({item}) => (
        <UserStory
        key={'UserStory'+ item.id}
         firstName={item.firstname} 
      profileImage={item.profileImage}/>
    )}/>
    </View>
  </SafeAreaView>
)}

export default App;
