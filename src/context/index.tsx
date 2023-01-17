import React, { createContext, useState } from 'react';

import { getCharacters } from '../api/index'

import { CharacterType, StoreContextProps, StoreProps } from './type';


export const StoreContext = createContext<StoreContextProps>({
    characters: [],
    handleGetCharacters: () => undefined
});

const Store: React.FC<StoreProps> = ({ children }) => {

    const [characters, setCharacters] = useState<CharacterType[]>([])
    const [page, setPage] = useState(1);

    const handleGetCharacters = async () => {
        try {
            const { data: { results } } = await getCharacters(page);


            setPage(prevState => prevState + 1);

            setCharacters(prevState => prevState.concat(results));

        } catch (e) {
            console.log('error', e)
            throw e;
        }
    }

    return (
        <StoreContext.Provider value={{
            characters,
            handleGetCharacters: handleGetCharacters
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default Store;