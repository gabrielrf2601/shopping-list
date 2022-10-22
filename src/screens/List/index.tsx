import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';

import { styles } from './styles';
import { ShoppingItem } from './types';
import { theme } from '../../theme';
import { ShoppingList } from '../../components/ShoppingList';
import { ModalConfirmDelete } from '../../components/Modal';

export function List() {
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([])
  const [item, setItem] = useState<ShoppingItem>({} as ShoppingItem);
  const [modalVisible, setModalVisible] = useState(false);

  const playSound = async (isSelect = true) => {
    const { sound: selectSound } = await Audio.Sound.createAsync(
       require('../../../assets/menu-selection.mp3')
    );
    const { sound: deleteSound } = await Audio.Sound.createAsync(
      require('../../../assets/sound.mp3')
   );
    if (isSelect) {
      await selectSound.playFromPositionAsync(0)
    } else {
      await deleteSound.playFromPositionAsync(0)
    }
  }

  const selectItem = (item: number) => {
    shoppingList[item].isSelected = !shoppingList[item].isSelected;
    setShoppingList([...shoppingList]);
    playSound(true);
  }

  const createNewShoppingItem = () => {
    const newItem = {id: uuid.v4() as string, isSelected: false, name: item.name};
    setShoppingList([...shoppingList, newItem]);
    setItem({} as ShoppingItem)
  }

  const selectAll = () => {
    if(shoppingList.filter((e: ShoppingItem) => e.isSelected).length === shoppingList.length) {
        shoppingList.forEach(e => {
            e.isSelected = false;
        })
    } else {
        shoppingList.forEach(e => {
            e.isSelected = true;
        })
    }
    setShoppingList([...shoppingList]);
    playSound();
}


  const handleDeleteItem = (itemSelected?: ShoppingItem) => {
    if (itemSelected) {
      setItem(itemSelected)
    }
    setModalVisible(true);
  }

  const handleInputChange = (e: any) => {
    setItem({...item, name: e})
  }

  const onDelete = () => {
    if(item?.id) {
      const index = shoppingList.findIndex(e => e.id === item.id);
        shoppingList.splice(index, 1);
        setShoppingList([...shoppingList]);
        setItem({} as ShoppingItem);
        setModalVisible(false);
    } else {
      const filteredItems: any = shoppingList.filter(e => !e.isSelected);
      setShoppingList(filteredItems);
      setModalVisible(false);
    }
    playSound(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ModalConfirmDelete 
        visible={modalVisible} 
        onClose={() => {
          setItem({} as ShoppingItem);
          setModalVisible(false)
        }}
        onDelete={onDelete}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de compras</Text>
        {shoppingList.length > 0 && (
          <Text style={styles.headerText}>
            {shoppingList.filter((item: ShoppingItem) => item.isSelected).length}/
            {shoppingList.length}
          </Text>
        )}
      </View>
      
      <View>
        {shoppingList.filter((e: ShoppingItem) => e.isSelected).length > 0 && (
          <View style={{marginTop: 15, marginEnd: 15}}>
            <TouchableOpacity style={styles.selectAll} onPress={selectAll}>
              <Text style={{...styles.headerText, color: theme.colors.selectedColor}}>
                {shoppingList.filter((e: ShoppingItem) => e.isSelected).length === shoppingList.length ?
                  'Desselecionar todos' : 'Selecionar todos'
                }
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteAll} onPress={() => handleDeleteItem()}>
              <Text style={{...styles.headerText, color: 'red'}}>
                Apagar todos selecionados
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={{padding: 5, flex: 1}}>
        <ShoppingList selectItem={selectItem} items={shoppingList} handleDeleteItem={handleDeleteItem}/>
      </View>

      <View style={styles.footer}>
        <TextInput 
          placeholder='Novo item da lista'
          value={item.name} 
          onChangeText={handleInputChange}
          style={styles.input} 
        />
        <TouchableOpacity style={styles.addButton} onPress={createNewShoppingItem}>
          <AntDesign name="plus" size={20} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}