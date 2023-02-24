import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Container from '../../components/Container/Container';

import styles from './Post.styles';

const SinglePost = ({navigation, route}) => {
  const {itemDetails} = route?.params;
  return (
    <Container insets={{top: true, bottom: true}}>
      <View>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.label}> Posts</Text>
        </View>
        <View style={{marginBottom: 10, marginTop: 15}}>
          <View style={styles.top}>
            <View style={styles.topleft}>
              <Image
                source={require('../../storage/images/profil.jpg')}
                style={styles.profilImage}
              />
              <Text style={styles.title}>{itemDetails?.name}</Text>
            </View>
          </View>

          <View style={{height: 400}}>
            <Image source={itemDetails?.image} style={styles.ımage} />
          </View>

          <View style={styles.ıconContainer}>
            <View style={styles.leftIcon}>
              <TouchableOpacity>
                <AntDesign name={'hearto'} size={24} color={'white'} />
              </TouchableOpacity>

              <TouchableOpacity style={{marginLeft: 20}}>
                <Feather name="message-circle" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.likeText}>700 Like</Text>

          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={styles.postName}>Jennifer</Text>
            <Text style={{color: 'white', marginTop: 2}}> smile..</Text>
          </View>

          <Text style={styles.comment}>2 see all comment</Text>
        </View>
      </View>
    </Container>
  );
};
export default SinglePost;
