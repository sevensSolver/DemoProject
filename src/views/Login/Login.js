import React, {useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {Linking} from 'react-native';
import {TextInput} from 'react-native-paper';

import Container from '../../components/Container/Container';
import Content from '../../components/Content/Content';

import styles from './Login.styles';

const trueEmail = 'E';
const truePassword = '1';

const Login = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <Container insets={{top: true, bottom: true}}>
      <Content style={{flex: 1, backgroundColor: '#27026B'}}>
        <View style={{flex: 1, backgroundColor: '#27026B'}}>
          <View style={styles.topContainer}>
            <Image
              style={styles.logo}
              source={require('../../../assets/images/logo.png')}
            />
          </View>

          <View style={styles.keyboardView}>
            <TextInput
              theme={{colors: {text: 'white'}}}
              placeholder="Enter your email"
              value={name}
              onChangeText={item => setName(item)}
              placeholderTextColor="grey"
              selectionColor="grey"
              style={styles.textInput}
              activeOutlineColor="grey"
              activeUnderlineColor="#3a3a3a"
            />

            <TextInput
              theme={{colors: {text: 'white'}}}
              placeholder="Enter your password"
              placeholderTextColor="grey"
              value={password}
              onChangeText={itemP => setPassword(itemP)}
              style={styles.textInput}
              selectionColor="grey"
              secureTextEntry={passwordVisible}
              activeUnderlineColor="#3a3a3a"
              activeOutlineColor="#3a3a3a"
              right={
                <TextInput.Icon
                  color={'grey'}
                  name={passwordVisible ? 'eye-off' : 'eye'}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
            />
            <TouchableOpacity
              onPress={() => {
                trueEmail === name && truePassword === password
                  ? navigation.reset({
                      index: 0,
                      routes: [{name: 'BottomTab'}],
                    })
                  : Alert.alert('Incorrect email or password');
              }}
              style={{
                ...styles.login,
                backgroundColor:
                  name === null && password === null ? 'gray' : '#0195f7',
              }}
              disabled={name === null && password === null ? true : false}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <View
              style={{
                alignItems: 'center',
                padding: 30,
              }}
            >
              <View style={styles.text}>
                <Text style={{fontSize: 16, color: 'grey'}}>
                  Forgot your login details?{' '}
                </Text>
                <Text style={styles.help}> Get help logging in.</Text>
              </View>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};
export default Login;
