import Card from '..';
import { fireEvent, render } from '@testing-library/react-native';
import { CharacterType } from '../../../context/type';

const character: CharacterType = {
    id: 1,
    name: 'test',
    status: 'test',
    species: 'test',
    gender: 'test',
    origin: {
        name: 'test',
    },
    location: {
        name: 'test',
    },
    image: 'test',
    episode: ['test', 'test']
}

describe("Card", () => {
    it("should trigger onPress", () => {
        const onPress = jest.fn();

        const { getByTestId } = render(
            <Card
                character={character}
                onPress={onPress} />
        )

        fireEvent.press(getByTestId('card-touchable-test-id'))
        expect(onPress).toHaveBeenCalledTimes(1);
    })

    it("should render CoverImage", () => {
        const { getByTestId } = render(
            <Card character={character} />
        );

        expect(getByTestId('cover-img-test-id')).toBeDefined();
    })

    it("should render card name", () => {
        const { getByTestId } = render(
            <Card character={character} />
        );

        expect(getByTestId('card-name-test-id')).toBeDefined();
    })
})