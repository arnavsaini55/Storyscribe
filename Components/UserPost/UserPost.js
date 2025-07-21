import React from "react";
import PropTypes from 'prop-types';
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faComment, faCommentAlt, faEllipsis, faHeartPulse, faShare } from "@fortawesome/free-solid-svg-icons";
import style from "./style";
import { Image } from "react-native";

const UserPost = props => {
    return (
        <View style={style.userfull}>
            <View style={style.user}>
                {/* Left side: Profile + Name + Location */}
                <View style={style.userProfile}>
                    <UserProfileImage profileImage={props.profileImage} imageDimensions={48} />

                    <View style={style.userTextContainer}>
                        <Text style={style.userProfileContainer}>{props.firstName} {props.lastName}</Text>
                        {props.location && (
                            <Text style={style.location}>{props.location}</Text>
                        )}
                    </View>
                </View>

                {/* Right side: Ellipsis icon */}
                <TouchableHighlight>
                <FontAwesomeIcon icon={faEllipsis} size={24} color="#79869F"  />
                </TouchableHighlight>
            </View>
            <View style={style.userpost}>
                <Image  source={props.image}/>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={style.inputSection}>
                    <FontAwesomeIcon icon={faHeartPulse} size={16} style={style.commentSection}/>
                    <Text style={{marginLeft: 9, color:"#79869F"}}>{props.likes} </Text>
                </View>
                <View style={style.inputSection}>
                    <FontAwesomeIcon icon={faCommentAlt} size={16} style={style.commentSection}/>
                    <Text style={{marginLeft: 9, color:"#79869F"}}>{props.comments} </Text>
                </View>
                <View style={style.inputSection}>
                    <FontAwesomeIcon icon={faShare} size={16} style={style.commentSection}/>
                    <Text style={{marginLeft: 9, color:"#79869F"}}>{props.bookmarks} </Text>
                    
                </View>
                
            </View>
        </View>
    );
};

UserPost.propTypes = {
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