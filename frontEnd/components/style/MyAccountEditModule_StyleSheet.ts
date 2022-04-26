import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 15,
  },
  defaultCard: {
    margin: 10,
    marginBottom: 20,
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignContent: 'flex-start',
    textAlign: 'left',
  },
  preferenceContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  secondaryCard: {
    borderRadius: 30,
    margin: 0,
    marginLeft: 35,
    minWidth: 50,
    padding: 5,
  },
  none: {},
  labelCard: {
    width: 15,
    height: 15,
    justifyContent: 'space-around',
    marginRight: 5,
    marginLeft: 3,
    resizeMode: 'contain',
  },
  elements: {
    marginLeft: 15,
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  basicButton: {
    padding: 5,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#FF5E5B',
  },
  basicButtonText: {
    color: 'white',
    fontWeight: '700',
  },
});

export { styles };
