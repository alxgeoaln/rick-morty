import { NavigationContainer } from '@react-navigation/native';
import Characters from '..'

import * as methods from '../../../api/index'

import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { CharacterType } from '../../../context/type';
import Store from '../../../context';

const characters: CharacterType[] = [
    {
        id: 4,
        name: 'Beth Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Female',
        origin: {
            name: 'Earth (Replacement Dimension)',
        },
        location: {
            name: 'Earth (Replacement Dimension)',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
        episode: [
            'https://rickandmortyapi.com/api/episode/6',
            'https://rickandmortyapi.com/api/episode/7',
            'https://rickandmortyapi.com/api/episode/8',
            'https://rickandmortyapi.com/api/episode/9',
            'https://rickandmortyapi.com/api/episode/10',
            'https://rickandmortyapi.com/api/episode/11',
            'https://rickandmortyapi.com/api/episode/12',
            'https://rickandmortyapi.com/api/episode/14',
            'https://rickandmortyapi.com/api/episode/15',
            'https://rickandmortyapi.com/api/episode/16',
            'https://rickandmortyapi.com/api/episode/18',
            'https://rickandmortyapi.com/api/episode/19',
            'https://rickandmortyapi.com/api/episode/20',
            'https://rickandmortyapi.com/api/episode/21',
            'https://rickandmortyapi.com/api/episode/22',
            'https://rickandmortyapi.com/api/episode/23',
            'https://rickandmortyapi.com/api/episode/24',
            'https://rickandmortyapi.com/api/episode/25',
            'https://rickandmortyapi.com/api/episode/26',
            'https://rickandmortyapi.com/api/episode/27',
            'https://rickandmortyapi.com/api/episode/28',
            'https://rickandmortyapi.com/api/episode/29',
            'https://rickandmortyapi.com/api/episode/30',
            'https://rickandmortyapi.com/api/episode/31',
            'https://rickandmortyapi.com/api/episode/32',
            'https://rickandmortyapi.com/api/episode/33',
            'https://rickandmortyapi.com/api/episode/34',
            'https://rickandmortyapi.com/api/episode/35',
            'https://rickandmortyapi.com/api/episode/36',
            'https://rickandmortyapi.com/api/episode/38',
            'https://rickandmortyapi.com/api/episode/39',
            'https://rickandmortyapi.com/api/episode/40',
            'https://rickandmortyapi.com/api/episode/41',
            'https://rickandmortyapi.com/api/episode/42',
            'https://rickandmortyapi.com/api/episode/43',
            'https://rickandmortyapi.com/api/episode/44',
            'https://rickandmortyapi.com/api/episode/45',
            'https://rickandmortyapi.com/api/episode/46',
            'https://rickandmortyapi.com/api/episode/47',
            'https://rickandmortyapi.com/api/episode/48',
            'https://rickandmortyapi.com/api/episode/49',
            'https://rickandmortyapi.com/api/episode/51'
        ],
    },
    {
        id: 5,
        name: 'Beth Smith1',
        status: 'Alive',
        species: 'Human',
        gender: 'Female',
        origin: {
            name: 'Earth (Replacement Dimension)',
        },
        location: {
            name: 'Earth (Replacement Dimension)',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
        episode: [
            'https://rickandmortyapi.com/api/episode/6',
            'https://rickandmortyapi.com/api/episode/7',
            'https://rickandmortyapi.com/api/episode/8',
            'https://rickandmortyapi.com/api/episode/9',
            'https://rickandmortyapi.com/api/episode/10',
            'https://rickandmortyapi.com/api/episode/11',
            'https://rickandmortyapi.com/api/episode/12',
            'https://rickandmortyapi.com/api/episode/14',
            'https://rickandmortyapi.com/api/episode/15',
            'https://rickandmortyapi.com/api/episode/16',
            'https://rickandmortyapi.com/api/episode/18',
            'https://rickandmortyapi.com/api/episode/19',
            'https://rickandmortyapi.com/api/episode/20',
            'https://rickandmortyapi.com/api/episode/21',
            'https://rickandmortyapi.com/api/episode/22',
            'https://rickandmortyapi.com/api/episode/23',
            'https://rickandmortyapi.com/api/episode/24',
            'https://rickandmortyapi.com/api/episode/25',
            'https://rickandmortyapi.com/api/episode/26',
            'https://rickandmortyapi.com/api/episode/27',
            'https://rickandmortyapi.com/api/episode/28',
            'https://rickandmortyapi.com/api/episode/29',
            'https://rickandmortyapi.com/api/episode/30',
            'https://rickandmortyapi.com/api/episode/31',
            'https://rickandmortyapi.com/api/episode/32',
            'https://rickandmortyapi.com/api/episode/33',
            'https://rickandmortyapi.com/api/episode/34',
            'https://rickandmortyapi.com/api/episode/35',
            'https://rickandmortyapi.com/api/episode/36',
            'https://rickandmortyapi.com/api/episode/38',
            'https://rickandmortyapi.com/api/episode/39',
            'https://rickandmortyapi.com/api/episode/40',
            'https://rickandmortyapi.com/api/episode/41',
            'https://rickandmortyapi.com/api/episode/42',
            'https://rickandmortyapi.com/api/episode/43',
            'https://rickandmortyapi.com/api/episode/44',
            'https://rickandmortyapi.com/api/episode/45',
            'https://rickandmortyapi.com/api/episode/46',
            'https://rickandmortyapi.com/api/episode/47',
            'https://rickandmortyapi.com/api/episode/48',
            'https://rickandmortyapi.com/api/episode/49',
            'https://rickandmortyapi.com/api/episode/51'
        ],
    }
]

const generateCharacters = () => {
    return [{
        id: Math.random(),
        name: 'Beth Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Female',
        origin: {
            name: 'Earth (Replacement Dimension)',
        },
        location: {
            name: 'Earth (Replacement Dimension)',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
        episode: [
            'https://rickandmortyapi.com/api/episode/6',
            'https://rickandmortyapi.com/api/episode/7',
            'https://rickandmortyapi.com/api/episode/8',
            'https://rickandmortyapi.com/api/episode/9',
            'https://rickandmortyapi.com/api/episode/10',
            'https://rickandmortyapi.com/api/episode/11',
            'https://rickandmortyapi.com/api/episode/12',
            'https://rickandmortyapi.com/api/episode/14',
            'https://rickandmortyapi.com/api/episode/15',
            'https://rickandmortyapi.com/api/episode/16',
            'https://rickandmortyapi.com/api/episode/18',
            'https://rickandmortyapi.com/api/episode/19',
            'https://rickandmortyapi.com/api/episode/20',
            'https://rickandmortyapi.com/api/episode/21',
            'https://rickandmortyapi.com/api/episode/22',
            'https://rickandmortyapi.com/api/episode/23',
            'https://rickandmortyapi.com/api/episode/24',
            'https://rickandmortyapi.com/api/episode/25',
            'https://rickandmortyapi.com/api/episode/26',
            'https://rickandmortyapi.com/api/episode/27',
            'https://rickandmortyapi.com/api/episode/28',
            'https://rickandmortyapi.com/api/episode/29',
            'https://rickandmortyapi.com/api/episode/30',
            'https://rickandmortyapi.com/api/episode/31',
            'https://rickandmortyapi.com/api/episode/32',
            'https://rickandmortyapi.com/api/episode/33',
            'https://rickandmortyapi.com/api/episode/34',
            'https://rickandmortyapi.com/api/episode/35',
            'https://rickandmortyapi.com/api/episode/36',
            'https://rickandmortyapi.com/api/episode/38',
            'https://rickandmortyapi.com/api/episode/39',
            'https://rickandmortyapi.com/api/episode/40',
            'https://rickandmortyapi.com/api/episode/41',
            'https://rickandmortyapi.com/api/episode/42',
            'https://rickandmortyapi.com/api/episode/43',
            'https://rickandmortyapi.com/api/episode/44',
            'https://rickandmortyapi.com/api/episode/45',
            'https://rickandmortyapi.com/api/episode/46',
            'https://rickandmortyapi.com/api/episode/47',
            'https://rickandmortyapi.com/api/episode/48',
            'https://rickandmortyapi.com/api/episode/49',
            'https://rickandmortyapi.com/api/episode/51'
        ],
    },]
}

const eventData = {
    nativeEvent: {
        contentOffset: {
            y: 300,
        },
        contentSize: {
            // Dimensions of the scrollable content
            height: 200,
            width: 100,
        },
        layoutMeasurement: {
            // Dimensions of the device
            height: 100,
            width: 100,
        },
    },
}

describe('Charaters screen', () => {
    it('should render initial cards', async () => {
        const mockGetCharacters = jest.spyOn(methods, 'getCharacters');

        mockGetCharacters.mockResolvedValue({
            data: {
                results: generateCharacters()
            }
        })

        const { findByTestId, findAllByTestId } = render(
            <Store>
                <Characters />
            </Store>, { wrapper: NavigationContainer });

        const FlatList = await findByTestId('flatlist-test-id')

        await waitFor(async () => {
            expect(mockGetCharacters).toHaveBeenCalled();

            const names = await findAllByTestId('card-name-test-id');
            fireEvent.scroll(FlatList, eventData);
            expect(names.length).toEqual(2);
        })

    })
})

