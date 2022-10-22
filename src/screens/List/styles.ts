import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    padding: 15,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#fff',
    fontSize: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  footer: {
    width: '100%',
    padding: 15,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
  },
  input: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    fontSize: 18,
  },
  addButton: {
    width: '15%',
    padding: 15,
    borderRadius: 10,
    marginLeft: 15,
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectAll: {
    fontWeight: 'bold',
    borderRadius: 5,
    height: 35,
    width: 300,
    marginTop: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.selectedColor,
  },
  deleteAll: {
    fontWeight: 'bold',
    borderRadius: 5,
    height: 35,
    width: 300,
    marginTop: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
  },
});