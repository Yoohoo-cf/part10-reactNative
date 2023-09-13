import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#415a77',
    padding: 16,
    borderRadius: 6,
  },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Pressable fontWeight='bold'>
                <Text fontWeight='bold'>Repositories</Text>
            </Pressable>
        </View>
    );
};

export default AppBar;