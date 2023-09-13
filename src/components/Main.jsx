import { View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const Main = () => {
    return (
        <View style={{ padding: 10, backgroundColor: '#e1e4e8'}}>
            <AppBar />
            <RepositoryList />
        </View>
    );
};

export default Main;