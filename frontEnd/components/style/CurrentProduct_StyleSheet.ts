import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	mainViewCardContainer: {
		alignItems: 'center',
		padding: 0,
		marginTop: 30,
	},
	mainCard: {
		borderRadius: 20,
		width: '90%',
		height: undefined,
		alignItems: 'center',
		paddingBottom: 20,
		paddingLeft: 25,
		paddingRight: 25,
		padding: 0,
		marginTop: 0,
	},
	headerProductViewContainer: {
		backgroundColor: '#fff',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	mainImageLoveCard: {
		margin: 0,
		marginTop: 7,
		padding: 0,
		width: 24,
		height: 22,
	},
	mainTitle: {
		fontSize: 25,
		//fontFamily: 'Poppins',
		fontWeight: 'bold',
		marginTop: 5,
		marginBottom: 15,
		alignContent: 'flex-start',
		textAlign: 'center',
	},
	title: {
		fontSize: 25,
		//fontFamily: 'Poppins',
		fontWeight: 'bold',
		marginTop: 10,
		alignContent: 'flex-start',
		textAlign: 'center',
	},
	emojeeView: { flexDirection: 'row', flexWrap: 'wrap' },
	textForEmojee: { textAlign: 'center', marginRight: 5, fontSize: 22 },
	emojee: { width: 30, height: 30 },
	labelViewCardContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	mainImageCard: {
		width: 280,
		height: 200,
		margin: 0,
		borderRadius: 15,
	},
	secondaryFirstCard: {
		borderRadius: 30,
		margin: 0,
		padding: 5,
		minWidth: 70,
	},
	secondaryCard: {
		borderRadius: 30,
		margin: 0,
		marginLeft: 35,
		minWidth: 70,
		padding: 5,
	},
	viewForLabelText: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: 'white',
	},
	labelCard: {
		width: 15,
		height: 15,
		justifyContent: 'space-around',
		marginRight: 5,
		marginLeft: 3,
		resizeMode: 'contain',
	},
	textLabel: {
		textAlign: 'center',
		marginRight: 5,
	},
});

export { styles };
