import {View, Image, StyleSheet} from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 16,
  },
  countsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  countItem: {
    marginLeft: 40,
  },
  infoContainer: {
    marginLeft: 100,
    flexWrap: 'wrap',
  },
});

const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`
  }
  return count.toString();
}


const RepositoryItem = ({ item }) => (
    <View style={styles.container}>
      <View>
      <Image 
      style={styles.tinyLogo}
      source={{
        uri: 'https://fullstackopen.com/static/b13920b86534c487e698131e02d7896a/4b190/7.jpg'
      }}
      />
      <Image 
      source={{
        uri: 'https://fullstackopen.com/static/b13920b86534c487e698131e02d7896a/4b190/7.jpg'
      }}
      />
      <Image 
      source={{
        uri: 'https://fullstackopen.com/static/b13920b86534c487e698131e02d7896a/4b190/7.jpg'
      }}
      />
      <Image 
      source={{
        uri: 'https://fullstackopen.com/static/b13920b86534c487e698131e02d7896a/4b190/7.jpg'
      }}
      />
      </View>
      <View style={styles.infoContainer}>
          <Text fontWeight='bold' fontSize='subheading'>
            {item.fullName}
            </Text>
          <Text color='textSecondary'>{item.description}</Text>
          <Text>{item.language}</Text>
        </View>
      <View style={styles.countsContainer}>
        <View style={styles.countItem}>
          <Text fontWeight='bold'>{formatCount(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.countItem}>
          <Text fontWeight='bold'>{formatCount(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.countItem}>
          <Text fontWeight='bold'>{formatCount(item.reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.countItem}>
          <Text fontWeight='bold'>{formatCount(item.ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );

export default RepositoryItem;