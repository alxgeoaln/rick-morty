import CoverImage from '..';
import { render } from '@testing-library/react-native';

describe('CoverImage', () => {
    it('should be defined', () => {
        const { getByTestId } = render(<CoverImage uri='' />)


        expect(getByTestId('cover-img-test-id')).toBeDefined()
    })

    it('should be defined with extra style', () => {
        const { getByTestId } = render(<CoverImage uri='' style={{
            aspectRatio: 2
        }} />)


        expect(getByTestId('cover-img-test-id')).toBeDefined()
    })
})