import { render } from '@testing-library/react-native';
import Name from '..';

describe("Name component", () => {
    it("should match snapshot", () => {
        const snapshot = render(<Name />).toJSON()

        expect(snapshot).toMatchSnapshot();
    })
})