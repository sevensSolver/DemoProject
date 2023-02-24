import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';

import Container from '../../components/Container/Container';

import styles from './Post.styles';

const _data = [
  {
    id: 1,
    name: 'Lucy',
    image: require('../../storage/images/post.jpg'),
  },
  {
    id: 2,
    name: 'Martina',
    image: require('../../storage/images/profil.jpg'),
  },
  {
    id: 3,
    name: 'Jimmy',
    image: require('../../storage/images/profil2.jpg'),
  },
  {
    id: 4,
    name: 'Turner',
    image: require('../../storage/images/profil3.jpg'),
  },
];

const ProfilPost = ({navigation}) => {
  const flatListRef = React.useRef(null);

  const showImage = item => {
    return (
      <TouchableOpacity
        style={{flex: 1, padding: 10}}
        onPress={() => navigation.navigate('SinglePost', {itemDetails: item})}
      >
        <Image source={item?.image} resizeMode="cover" style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <View style={{flex: 1}}>
        <FlatList
          data={_data}
          renderItem={({item}) => showImage(item)}
          keyExtractor={item => item?.id}
          horizontal={false}
          ref={flatListRef}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};
export default ProfilPost;
