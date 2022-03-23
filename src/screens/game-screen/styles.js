import { StyleSheet, Dimensions } from 'react-native'
import { fontSize, colors, margin } from '../../constants/theme'

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        height: height * 0.35,
    },
    cardContainerLandscape: {
        height: height * 0.5,
    },
    confirmedText: {
        fontSize: fontSize.large,
        fontWeight: 'bold',
        color: colors.primary,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    cardTitle: {
        fontSize: fontSize.title,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: margin.medium,
        color: colors.text,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: margin.medium,
    }
})