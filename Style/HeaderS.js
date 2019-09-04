import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        paddingTop: 40,
        backgroundColor: 'white',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey'
    },
    headerText: {
        fontSize: 22,
        color: 'lightblue' ,
        fontWeight: 'bold',

    },
});
