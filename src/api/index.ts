import axios from "axios";

import { Response } from '../context/type'

export const getCharacters = (page: number = 1) => {
    return axios.get<any, Response>(`https://rickandmortyapi.com/api/character?page=${page}`)
};