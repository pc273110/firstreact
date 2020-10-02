import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = props => {
    return <View>
        <ImageDetail imageSource={props.imageSource} />
        <Text>{props.title}</Text>
        <Text>Image Score {props.score}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default ImageDetail;
