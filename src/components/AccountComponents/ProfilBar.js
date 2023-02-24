import React, {useRef} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ProfilBar = () => {
  const bottomSheet = useRef();
  const bottomSheet2 = useRef();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.right}>
        <TouchableOpacity onPress={() => bottomSheet2.current.show()}>
          <FontAwesome
            name="plus-square-o"
            size={28}
            color="white"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <BottomSheet
          hasDraggableIcon
          ref={bottomSheet2}
          height={450}
          sheetBackgroundColor="#27026B"
        >
          <View style={{alignItems: 'center', marginTop: 15}}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Create
            </Text>
          </View>
          <View style={styles.line} />

          <View style={{marginLeft: 15, marginTop: 15}}>
            <View style={styles.sheet2}>
              <Image source={require('../../../assets/images/video.png')} />
              <Text style={styles.label}>Reels Video</Text>
            </View>

            <View style={styles.sheet2}>
              <Image source={require('../../../assets/images/grid.png')} />
              <Text style={styles.label}>Post</Text>
            </View>

            <View style={styles.sheet2}>
              <Image
                source={require('../../../assets/images/stories.png')}
                style={styles.icon}
              />
              <Text style={styles.label}>Story</Text>
            </View>
            <View style={styles.sheet2}>
              <Image
                source={require('../../../assets/images/highlight-story.png')}
                style={styles.icon}
              />
              <Text style={styles.label}> Featured Story</Text>
            </View>

            <View style={styles.sheet2}>
              <Image
                source={require('../../../assets/images/live.png')}
                style={styles.icon}
              />
              <Text style={styles.label}> Live</Text>
            </View>

            <View style={styles.sheet2}>
              <Image
                source={require('../../../assets/images/book.png')}
                style={styles.icon}
              />
              <Text style={styles.label}> Directory</Text>
            </View>
          </View>
        </BottomSheet>

        <BottomSheet
          hasDraggableIcon
          ref={bottomSheet}
          height={400}
          sheetBackgroundColor="#27026B"
        >
          <View style={{marginTop: 15, marginLeft: 5}}>
            <TouchableOpacity
              style={styles.sheet}
              onPress={() => {
                navigation.navigate('Settings');
                bottomSheet.current.close();
              }}
            >
              <Ionicons name="settings-sharp" size={28} color="white" />
              <Text style={styles.label}>Settings</Text>
            </TouchableOpacity>

            <View style={styles.sheet}>
              <Image
                source={require('../../../assets/images/timer.png')}
                style={styles.icon}
              />
              <Text style={styles.label}>Your movements</Text>
            </View>

            <View style={styles.sheet}>
              <Image
                source={require('../../../assets/images/time.png')}
                style={styles.icon}
              />
              <Text style={styles.label}>Archive</Text>
            </View>

            <View style={styles.sheet}>
              <Image
                source={require('../../../assets/images/qr-code.png')}
                style={styles.icon}
              />
              <Text style={styles.label}>QR Code</Text>
            </View>

            <View style={styles.sheet}>
              <Feather name="bookmark" size={28} color="white" />
              <Text style={styles.label}>Bookmark</Text>
            </View>

            <View style={styles.sheet}>
              <AntDesign name="bars" size={28} color="white" />
              <Text style={styles.label}>Saved</Text>
            </View>

            <View style={styles.sheet}>
              <Image
                source={require('../../../assets/images/heart.png')}
                style={styles.icon}
              />
              <Text style={styles.label}>COVID-19 Information Center</Text>
            </View>
          </View>
        </BottomSheet>

        <TouchableOpacity onPress={() => bottomSheet.current.show()}>
          <FontAwesome name="bars" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: {
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    // backgroundColor: 'pink',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '43%',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '25%',
    marginRight: 10,
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  icon: {
    width: 28,
    height: 28,
  },
  line: {
    borderBottomWidth: 0.8,
    borderBottomColor: '#3a3a3a',
    marginTop: 10,
  },
  sheet: {
    backgroundColor: '#27026B',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sheet2: {
    backgroundColor: '#27026B',
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 15,
  },
});
export default ProfilBar;
