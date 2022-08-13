import * as React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../Styles/HeaderMain';
const Header = () => {
    return (
        <View style={styles.headerMain}>
            <View style={styles.headerFlex}>
                <TouchableOpacity>
                    <Icon name='menu-outline' size={40} />
                </TouchableOpacity>
                <TextInput placeholder='Search for product ...' placeholderTextColor="#333"
                    style={styles.searchBox}
                />
                <TouchableOpacity>
                    <Icon name='search-outline' size={30}  style={styles.searchIcon}/>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Header;

