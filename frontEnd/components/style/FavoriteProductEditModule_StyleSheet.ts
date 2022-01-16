import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	globalProductContainer: {
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
		marginTop: 25,
	},
	productCardContainer: {
		padding: 15,
		paddingBottom: 10,
		margin: 0,
		marginBottom: 15,
		borderRadius: 20,
		width: '100%',
		height: 'auto',
		alignItems: 'center',
	},
	headerProductViewContainer: {
		backgroundColor: '#fff',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	mainImageCard: {
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 18,
		marginRight: 18,
	},
	mainImageLoveCard: {
		margin: 0,
		marginLeft: 205,
		width: 24,
		height: 22,
	},
	mainImageCrossCard: {
		margin: 0,
		width: 24,
		height: 22,
	},
	title: {
		margin: 0,
		padding: 0,
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export { styles };
