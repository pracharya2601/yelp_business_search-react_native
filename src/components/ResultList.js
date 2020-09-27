import React from 'react';
import {withNavigation} from 'react-navigation';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

import ItemDetail from './ItemDetail'

const ResultList = (props) => {
    const { heading, results, navigation} = props;
    return(
        <View style={styles.container}>
            <Text style={styles.headingStyle}>{heading}</Text>
            <FlatList
                horizontal
                data={results}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ItemScreen', {id: item.id})}
                    >
                        <ItemDetail result={item}/>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 5
    },
    headingStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5
    }
})

export default withNavigation(ResultList);