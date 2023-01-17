import React, { useContext, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Card } from '../../components';

import { StoreContext } from '../../context/index';
import { CharacterType } from '../../context/type';
import { StackParamsList } from '../../navigation';

const Characters = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    const {
        characters,
        handleGetCharacters
    } = useContext(StoreContext);

    useEffect(() => {
        handleGetCharacters();
    }, [])

    const renderItem = ({ item }: { item: CharacterType }) => {
        return (
            <Card
                character={item}
                onPress={() => navigate('Character', item)}
            />
        )
    }

    const handleOnReached = () => handleGetCharacters()

    return (
        <FlatList
            testID='flatlist-test-id'
            data={characters}
            renderItem={renderItem}
            onEndReached={handleOnReached}
        />
    )
}

export default Characters;