import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import Container from '../../components/Container/Container';
import data from '../../storage/database/post';

import styles from './AddPostStyle';

const AddPost = ({route}) => {
  const [image, setImage] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  const chooseFromLibrary = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    }).then(images => {
      setImage(images?.path);
      setShowImage(true);
    });
  };

  const handleText = text => {
    setDescription(text);
  };

  const handleSaveButton = () => {
    let _data = {
      id: 7,
      name: 'Hello ',
      postName: 'David',
      image: require('../../../assets/images/profil.jpg'),
      postImage: image,
      like: 25,
      comment: 'Nice Post',
      explanation: description,
      time: '1 saat önce',
      timeStory: '1s',
      islike: false,
    };

    let _localArray = [_data];
    let _mergerArray = route?.params?.localArray;
    _mergerArray = _localArray.concat(_mergerArray);
    route?.params?.setNewArray(_mergerArray);
    navigation.navigate('Home');
  };

  return (
    <Container insets={{top: true, bottom: true}}>
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View style={styles.topContainer}>
          <View style={styles.top}>
            <View style={styles.left}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={28} color="white" />
              </TouchableOpacity>
              <Text style={styles.label}>Add Post</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleSaveButton()}
              disabled={
                description?.length > 1 && image?.length > 1 ? false : true
              }
              style={{justifyContent: 'center'}}
            >
              <Text
                style={{
                  ...styles.label,
                  color:
                    description?.length > 1 && image?.length > 1
                      ? '#0195f7'
                      : 'gray',
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{flex: 0.8}}>
            <TouchableOpacity
              onPress={chooseFromLibrary}
              style={{alignItems: 'center'}}
            >
              {showImage ? (
                <Image
                  source={{uri: image}}
                  resizeMode="cover"
                  style={styles.imageStyle}
                />
              ) : (
                <Image
                  source={require('../../../assets/images/addImg.png')}
                  resizeMode="cover"
                  style={{width: 200, height: 200, tintColor: '#fff'}}
                />
              )}
            </TouchableOpacity>

            <View style={styles.galleryViewStyle}>
              <Text style={styles.galleryTextStyle}>Description</Text>
            </View>
            <TextInput
              placeholder="Enter post description here"
              onChangeText={text => handleText(text)}
              value={description}
              multiline={true}
              numberOfLines={5}
              style={styles.descriptionStyle}
              returnKeyType="done"
            />
          </ScrollView>
        </View>
      </View>
    </Container>
  );
};

export default AddPost;
