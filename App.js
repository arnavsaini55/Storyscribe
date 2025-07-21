import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import Title from "./Components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import globalStyle from "./assets/styles/globalStyle";
import UserStory from "./Components/UserStory/UserStory";
import UserPost from "./Components/UserPost/UserPost";

function App() {
  const userStories = [
    { firstname: "arnav", id: 1, profileImage: require("./assets/images/pp.jpg") },
    { firstname: "Shivi", id: 2, profileImage: require("./assets/images/default_profile.png") },
    { firstname: "Akshat", id: 3, profileImage: require("./assets/images/default_profile.png") },
    { firstname: "Shivansh", id: 4, profileImage: require("./assets/images/default_profile.png") },
    { firstname: "Ansh", id: 5, profileImage: require("./assets/images/default_profile.png") },
    { firstname: "Bhatnagar", id: 6, profileImage: require("./assets/images/default_profile.png") },
    { firstname: "Ayush", id: 7, profileImage: require("./assets/images/default_profile.png") },
    { firstname: "Akshana", id: 8, profileImage: require("./assets/images/default_profile.png") },
  ];

  const userPosts = [
    {
      id: 1,
      firstName: "Arnav",
      lastName: "Saini",
      location: "Lucknow, Up",
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      image: require("./assets/images/default_post.png"),
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      id: 2,
      firstName: "Jennifer",
      lastName: "Wilkson",
      location: "Worcester, MA",
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      image: require("./assets/images/default_post.png"),
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      id: 3,
      firstName: "Adam",
      lastName: "Spera",
      location: "Worcester, MA",
      likes: 100,
      comments: 8,
      bookmarks: 3,
      image: require("./assets/images/default_post.png"),
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      id: 4,
      firstName: "Nata",
      lastName: "Vacheishvili",
      location: "New York, NY",
      likes: 200,
      comments: 16,
      bookmarks: 6,
      image: require("./assets/images/default_post.png"),
      profileImage: require("./assets/images/default_profile.png"),
    },
  ];

  const userStoriesPageSize = 4;
  const userPostsPageSize = 2;

  const [isAppLoading, setIsAppLoading] = useState(true);

  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);

  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const loadInitialData = () => {
      const initialStories = pagination(userStories, 1, userStoriesPageSize);
      setUserStoriesRenderedData(initialStories);

      const initialPosts = pagination(userPosts, 1, userPostsPageSize);
      setUserPostsRenderedData(initialPosts);

      setIsAppLoading(false);
    };

    loadInitialData();
  }, []);

  const loadMoreStories = () => {
    const nextPage = userStoriesCurrentPage + 1;
    const nextStories = pagination(userStories, nextPage, userStoriesPageSize);

    if (nextStories.length > 0) {
      setUserStoriesRenderedData((prev) => [...prev, ...nextStories]);
      setUserStoriesCurrentPage(nextPage);
    }
  };

  const loadMorePosts = () => {
    const nextPage = userPostsCurrentPage + 1;
    const nextPosts = pagination(userPosts, nextPage, userPostsPageSize);

    if (nextPosts.length > 0) {
      setUserPostsRenderedData((prev) => [...prev, ...nextPosts]);
      setUserPostsCurrentPage(nextPage);
    }
  };

  if (isAppLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={globalStyle.header}>
              <Title title={"Lets Explore"} />
              <TouchableOpacity style={globalStyle.messageBox}>
                <FontAwesomeIcon icon={faEnvelope} size={20} color={"#898DAE"} />
                <View style={globalStyle.messageNumberContainer}>
                  <Text style={globalStyle.messageNumber}>9+</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={globalStyle.userStoryContainer}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={userStoriesRenderedData}
                renderItem={({ item }) => (
                  <UserStory
                    key={"UserStory" + item.id}
                    firstName={item.firstname}
                    profileImage={item.profileImage}
                  />
                )}
                onEndReachedThreshold={0.5}
                onEndReached={loadMoreStories}
              />
            </View>
          </>
        }
        data={userPostsRenderedData}
        renderItem={({ item }) => (
          <View style={globalStyle.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              image={item.image}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              profileImage={item.profileImage}
              location={item.location}
            />
          </View>
        )}
        onEndReachedThreshold={0.5}
        onEndReached={loadMorePosts}
      />
    </SafeAreaView>
  );
}

export default App;
