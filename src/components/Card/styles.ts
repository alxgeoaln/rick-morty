import { StyleSheet } from 'react-native';

import { pallete } from '../../common/colors';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginVertical: 20,
    },
    cardBorder: {
        borderRadius: 20,
        backgroundColor: pallete.white,
    },
    cardBehind: {
        position: 'absolute',
        borderWidth: 1,
        borderColor: pallete.black,
        backgroundColor: pallete.lightBrown,
        width: '100%',
        height: '100%',
        borderRadius: 20,
        left: 10,
        top: 10
    },
    image: {
        borderRadius: 20,
        padding: 10,
        borderWidth: 1
    },
    name: {
        position: 'absolute',
        bottom: 5,
        left: 10,
        zIndex: 2
    }

})

export default styles;