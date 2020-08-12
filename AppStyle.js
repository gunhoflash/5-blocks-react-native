import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FAFAFF',
		padding: 36,
		fontFamily: 'Roboto_400Regular'
	},
	board: {
		flexDirection: 'row',
		aspectRatio: 1,
	},
	innerBoard: {
		backgroundColor: '#FFD500',
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'stretch',
		aspectRatio: 1
	},
	scoreText: {
		fontSize: 36,
		fontWeight: '100',
		fontFamily: 'Roboto_100Thin',
		marginVertical: 20
	}
});