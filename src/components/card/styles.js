import { StyleSheet, Dimensions } from 'react-native'
import { colors, margin } from '../../constants/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        height: height / 2.1,
        justifyContent: 'center',
        marginTop: margin.medium,
        marginHorizontal: 50,
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        backgroundColor: colors.primaryBackground,
    },
});