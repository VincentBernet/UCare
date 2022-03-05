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
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 0,
	},
	alternativeCard: {
		zIndex: 200,
		width: 150,
		elevation: 200,
		borderRadius: 20,
		padding: 0,
	},
	alternativeContainerForLoader: {
		width: 150,
		height: 170,
		display: 'flex',
		justifyContent: 'center',
	},
	alternativeImageCard: {
		margin: 15,
		marginBottom: 10,
		borderRadius: 8,
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
		marginLeft: 5,
		marginRight: 5,
		paddingTop: 0,
		paddingBottom: 0,
		color: '#fff',
	},
});

export { styles };
