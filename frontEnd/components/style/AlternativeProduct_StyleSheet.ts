import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		//fontFamily: 'Poppins',
		fontWeight: 'bold',
		marginTop: 10,
		alignContent: 'flex-start',
		textAlign: 'center',
	},
	alternativeViewCardContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 0,
	},
	alternativeCard: {
		zIndex: 200,
		elevation: 200,
		borderRadius: 20,
		padding: 0,
	},
	alternativeContainerForLoader: {
		width: 112,
		height: 112,
		display: 'flex',
		justifyContent: 'center',
	},
	alternativeImageCard: {
		width: 112,
		height: 112,
		margin: 15,
	},
	alternativeCardBottom: {
		zIndex: 1,
		elevation: 1,
		backgroundColor: '#FF5E5B',
		margin: 0,
		padding: 0,
		paddingTop: 10,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},
	alternativeTitle: {
		marginTop: 0,
		paddingTop: 0,
		paddingBottom: 0,
		color: '#fff',
	},
});

export { styles };
