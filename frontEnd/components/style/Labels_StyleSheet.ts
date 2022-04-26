import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  labelViewCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
