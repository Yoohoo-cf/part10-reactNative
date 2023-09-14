import {View, Image, StyleSheet} from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5DC',
    padding: 16,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 16,
    alignItems: 'center',
  },
  countsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  countItem: {
    marginLeft: 40,
  },
  infoContainer: {
    marginLeft: 10,
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
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 30 }}>
      <Image 
        style={styles.tinyLogo}
        source={{
          uri: 'https://media.istockphoto.com/id/1446438866/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%A5%BD%E3%81%97%E3%81%84%E3%82%AB%E3%83%83%E3%83%97%E3%83%AB%E3%81%AE%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%80%E3%83%BC.jpg?s=612x612&w=0&k=20&c=xBOcc2nmMAUTku62WWoGbhTAFlgwxA_K0kqubafUf5U='
        }}
      />
      <View style={styles.infoContainer}>
        <Text fontWeight='bold' fontSize='subheading'>
          {item.fullName}
        </Text>
        <View style={{ flexWrap: 'wrap' }}>
          <Text color='textSecondary'>{item.description}</Text>
        </View>
        <Text>{item.language}</Text>
      </View>
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
