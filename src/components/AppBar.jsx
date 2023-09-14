// AppBar.jsx
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 2,
    flexDirection: 'row', // Make the tabs horizontal
    justifyContent: 'space-between', // Distribute space evenly
    alignItems: 'center',
    backgroundColor: '#415a77',
    padding: 16,
    borderRadius: 6,
    position: "sticky",
  },
  tabText: {
    fontWeight: 'bold',
    color: 'white',
    marginRight: 16, // Add margin to create space
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/'>
          <Text style={styles.tabText} fontSize="subheading">Repositories</Text>
        </Link>
        <Link to='/signin'>
          <Text style={styles.tabText} fontSize="subheading">Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
