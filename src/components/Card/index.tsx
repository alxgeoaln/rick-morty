import React from "react";
import { View, TouchableOpacity } from 'react-native';

import { CardProps } from "./type";

import styles from './styles';
import CoverImage from "../CoverImage";
import Name from "../Name";

const Card: React.FC<CardProps> = ({ character, onPress }) => {
    return (
        <TouchableOpacity testID="card-touchable-test-id" onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.cardBehind} />
                <View style={styles.cardBorder}>
                    <CoverImage style={styles.image} uri={character.image} />
                    <Name style={styles.name}>{character.name}</Name>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Card;