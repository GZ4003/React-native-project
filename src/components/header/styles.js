import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        height: height * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#52528C',
    },
    title: {
        fontFamily: 'PaletteMosaic-Regular',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    }
});