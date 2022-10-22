import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = (props?: any) => StyleSheet.create({
  shoppingItemsContainer: {
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: props.isSelected ? '#f8fff3' : theme.colors.backgroundSecondary,
    marginTop: 10,
    borderWidth: 1,
    borderColor: props.isSelected ? theme.colors.selectedColor : theme.colors.border,
    borderRadius: 5,
  },
  shoppingItemNameContainer: {
    width: '80%',
  },
  shoppingItemNameText: {
    textDecorationColor: props.isSelected ? theme.colors.selectedColor : theme.colors.border,
    textDecorationLine: props.isSelected ? 'line-through' : 'none',
    textDecorationStyle: "solid",
    color: props.isSelected ? theme.colors.selectedColor : theme.colors.color,
    fontSize: 16,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});