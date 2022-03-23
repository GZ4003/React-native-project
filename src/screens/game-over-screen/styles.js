import { StyleSheet, Dimensions } from 'react-native';
import { margin, fontSize, colors } from '../../constants/theme';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: width - 40,
        height: height * 0.2,
    },
    cardContainer: {
        width: width / 2,
        height: height * 0.25,
        marginVertical: margin.large,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rounds: {
        fontSize: fontSize.text,
        color: colors.primaryTitle,
    },
    choice: {
        fontSize: fontSize.large,
        color: colors.primary,
    }
});