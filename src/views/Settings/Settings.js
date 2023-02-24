import React from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import Container from '../../components/Container/Container';

import styles from './Setting.style';

const Settings = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    Alert.alert('Alert', 'Do you really want to logout ?', [
      {
        text: 'Cancel',
        onPress: () => null,
      },
      {
        text: 'Ok',
        onPress: () => navigation.navigate('Login'),
      },
    ]);
  };

  return (
    <Container insets={{top: true}}>
      <View style={styles.topHeader}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={32} color="white" />
        </TouchableWithoutFeedback>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <ScrollView>
        <Text style={styles.accountCenter}>Accounts Center</Text>
        <Text style={styles.p}>
          Including story and post sharing and logging in
        </Text>
        <Text style={styles.p}>Instagram, Facebook app and Messenger</Text>
        <Text style={styles.p}>
          Check the settings for connected experiences between
        </Text>
        <View style={{marginTop: 30}}>
          <Text style={styles.entry}>Options</Text>
          <TouchableWithoutFeedback onPress={() => handleSignOut()}>
            <Text style={styles.blueText}>Sign Out</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text style={styles.blueText}>Sign Out of All Accounts</Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Settings;
