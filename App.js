import {React,useEffect,useState} from "react";
import { FlatList, SafeAreaView,Text,TouchableNativeFeedback,TouchableOpacity,View } from "react-native";
import {getFontFamily} from "./assets/fonts/helper";
import Title from "./Components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import globalStyle from "./assets/styles/globalStyle"
import { faEnvelope,  } from "@fortawesome/free-solid-svg-icons";
import UserStory from "./Components/UserStory/UserStory";
import UserPost from "./Components/UserPost/UserPost";






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

   const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Worcester, MA',
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      image: require('./assets/images/default_post.png'),
       profileImage: require('./assets/images/default_profile.png'),
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Worcester, MA',
      likes: 100,
      comments: 8,
      bookmarks: 3,
      image: require('./assets/images/default_post.png'),
       profileImage: require('./assets/images/default_profile.png'),
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vacheishvili',
      location: 'New York, NY',
      likes: 200,
      comments: 16,
      bookmarks: 6,
      image: require('./assets/images/default_post.png'),
       profileImage: require('./assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 2000,
      comments: 32,
      bookmarks: 12,
      image: require('./assets/images/default_post.png'),
       profileImage: require('./assets/images/default_profile.png'),
      id: 5,
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
    <View>
      <FlatList data={userPosts} renderItem={({item}) => (
       <UserPost firstName={item.firstName}
       lastName={item.lastName}
        image={item.image}
        likes={item.likes}
        comments={item.comments}
        bookmarks={item.bookmarks}
        profileImage={item.profileImage}
        />
   )}
   />
    </View>
  </SafeAreaView>
)}

export default App;