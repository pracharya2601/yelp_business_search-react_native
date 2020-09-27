import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import { Octicons } from '@expo/vector-icons';

const SearchInput = (props) => {
    const {term, onInputChange, onTermSubmit} = props;
    return(
        <View style={styles.searchContainer}>
        <Octicons name="search" style={styles.iconStyle}/>
        <TextInput 
            style={styles.inputStyle}
            placeholder="Search"
            value={term}
            onChangeText= {onInputChange}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
      backgroundColor: '#d2edf7',
      height: 50,
      borderRadius: 5,
      marginHorizontal: 5,
      marginVertical: 10,
      flexDirection: 'row'
    },
    iconStyle: {
      fontSize: 30,
      alignSelf: 'center',
      marginHorizontal: 10,
    },
    inputStyle: {
      flex: 1,
      fontSize: 18
    }
});

export default SearchInput;