import React from "react";
import PropTypes from 'prop-types';
import { Text, View } from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const UserPost = props => {
    return <View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <UserProfileImage profileImage={props.profileImage} imageDimensions={48} />
        
        <View style={{justifyContent:'center', marginLeft:10}}>
            <Text>
                {props.firstName} {props.lastName}
            </Text>
            <View style={{justifyContent:'center'}}>
            {props.location && <Text>{props.location}
                </Text>}
                </View>
              </View>  
              <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
        </View>
        </View>;
};

UserPost.propTypes= {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.any.isRequired,
    profileImage: PropTypes.any.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired,
};

export default UserPost;