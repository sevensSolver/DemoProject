import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './AccountComponents.style';

const Bio = ({route}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.bioContainer}>
        <Text style={styles.userName}> {route ? route.name : 'David'}</Text>
        <Text style={styles.bio}>
          {route ? route.bio : 'Cambridge University'}
        </Text>
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <TouchableOpacity
          style={styles.edit}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <View style={{alignItems: 'center'}}>
            <Text style={styles.editText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Bio;
