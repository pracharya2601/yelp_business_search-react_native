import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import yelpApi from '../api/yelpApi';

const ItemScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getSingleResult = async (id) => {
       const response =  await yelpApi.get(`/${id}`);
       setResult(response.data);
    }

    useEffect(() => {
        getSingleResult(id);
    }, [])

    if(!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => (
                    <Image style={styles.imageStyle} source ={{uri: item}} />
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10
    },
    textStyle: {
        marginVertical: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    imageStyle: {
        height: 200,
        width: '100%',
        marginBottom: 10
    }
})

export default ItemScreen;