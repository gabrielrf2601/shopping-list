import React, { useState } from 'react';
import { Animated, FlatList, Text, View, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox'
import { AntDesign } from '@expo/vector-icons';
import * as Styled from './styles';
import { ShoppingItem } from '../../screens/List/types';

import { styles } from './styles';
import { ShoppingListProps } from './types';

export const ShoppingList = ({ items, selectItem, handleDeleteItem }: ShoppingListProps) => {
  return (
    <FlatList
      ListEmptyComponent={() => (
        <Text>Nenhum item na lista.</Text>
      )}
      data={items}
      keyExtractor={(item: ShoppingItem) => item.id}
      renderItem={({ item, index }) => (
        <View style={[styles(item).shoppingItemsContainer, styles(item).shadowProp]}>
          <CheckBox
            value={item.isSelected}
            onValueChange={() => selectItem(index)}
          />
          <View style={styles(item).shoppingItemNameContainer}>
            <Text style={styles(item).shoppingItemNameText}>{item.name}</Text>
          </View>
          <TouchableOpacity onPress={() => handleDeleteItem(item)}>
            <AntDesign name="closecircle" size={20} color="red" />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}