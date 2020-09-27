import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ItemDetail = ({result}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{uri: result.image_url}} />
            <Text style={styles.textStyle}>{result.name}</Text>
            <Text style={styles.smallTextStyle}>{result.rating} Stars,  {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
    },
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 5,
        marginBottom: 5
    },
    textStyle: {
        fontWeight: 'bold',
    },
    smallTextStyle: {
        fontSize: 11
    }
})

export default ItemDetail;