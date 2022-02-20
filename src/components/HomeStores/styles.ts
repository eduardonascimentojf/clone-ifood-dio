import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    textTransform: 'uppercase',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 20,
  },
  text: {
    marginRight: 10,
    color: '#808080',
  },
});
