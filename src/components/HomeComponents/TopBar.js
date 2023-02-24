import React from 'react';
import {Image, StatusBar, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import styles from './HomeComponents.style';

const TopBar = ({localArray, setNewArray}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor="#27026B" />

      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.icon}
        />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AddPost', {
              localArray: localArray,
              setNewArray: setNewArray,
            })
          }
        >
          <FontAwesome name="plus-square-o" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
