import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

import { ApolloProvider } from '@apollo/client';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

const apolloClient = createApolloClient();


const App = () => {
  console.log(Constants.expoConfig);

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  )
};

export default App;
