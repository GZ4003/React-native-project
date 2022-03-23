import { StyleSheet, Dimensions } from 'react-native'
import { colors, margin } from '../../constants/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        marginVertical: margin.large,
    },
    input: {
        height: height * 0.1,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        color: colors.primary,
        marginBottom: margin.small,
        fontSize: 30,
        alignSelf: 'center',
    }
});