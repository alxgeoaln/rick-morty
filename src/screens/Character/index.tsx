import React from 'react';
import { View, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import { CoverImage } from '../../components';
import { Name } from '../../components';

import { StackParamsList } from '../../navigation';

import styles from './styles';

const Character = () => {

    const { params } = useRoute<RouteProp<StackParamsList, 'Character'>>();

    return (
        <View style={styles.container}>
            <CoverImage uri={params.image} />
            <View style={styles.devider} />
            <View style={styles.details}>
                <Name>{params.name}</Name>
                <Text>{params.species}, {params.gender} - {params.status} </Text>
                <Text>{`Number of episodes - ${params.episode.length}`}</Text>
                <Text style={[styles.origin, styles.text]}>{params.origin.name}</Text>
                <Text style={styles.lastLocationTitle}>Last known location</Text>
                <Text>{params.location.name}</Text>
            </View>
        </View>
    )
}

export default Character;