import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { CharacterStack } from './src/navigation';
import Store from './src/context';

function App(): JSX.Element {

  return (
    <Store>
      <NavigationContainer>
        <CharacterStack />
      </NavigationContainer>
    </Store>

  );
}


export default App;
