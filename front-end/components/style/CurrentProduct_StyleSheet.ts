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
  mainImageCard: {
    width: 280,
    height: 200,
    margin: 0,
    borderRadius: 15,
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
    // fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    alignContent: 'flex-start',
    textAlign: 'center',
  },
  title: {
    fontSize: 25,
    // fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginTop: 10,
    alignContent: 'flex-start',
    textAlign: 'center',
  },
  containerFriendlyNutri: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export { styles };
