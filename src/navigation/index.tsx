import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Characters, Character } from '../screens';
import { CharacterType } from '../context/type';

export type StackParamsList = {
    Characters: undefined;
    Character: CharacterType;
};


const Stack = createNativeStackNavigator<StackParamsList>();

export const CharacterStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Characters'
            component={Characters}
        />
        <Stack.Screen
            name='Character'
            component={Character}
        />
    </Stack.Navigator>
)