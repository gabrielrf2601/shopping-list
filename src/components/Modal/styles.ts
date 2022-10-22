import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: theme.colors.background,
    maxHeight: 400,
    minWidth: '70%',
    maxWidth: 400,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 15,
  }
});