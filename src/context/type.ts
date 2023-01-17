import { ReactNode } from "react";

export interface CharacterType {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
        name: string;
    };
    location: {
        name: string;
    };
    image: string;
    episode: string[];
}

export interface StoreContextProps {
    characters: CharacterType[],
    handleGetCharacters: () => void
}

export interface StoreProps {
    children: ReactNode
}

export type Response = {
    data: {
        results: CharacterType[]
    }
}