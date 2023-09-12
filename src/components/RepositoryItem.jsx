import {View} from 'react-native';
import Text from './Text';


const RepositoryItem = ({ item }) => (
    <View>
      <Text fontWeight='bold' style={{ paddingTop: 10 }} fontSize='subheading'>
        Full name: {item.fullName}
        </Text>
      <Text color='textSecondary'>Description: {item.description}</Text>
      <Text color='primary'>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  );

export default RepositoryItem;