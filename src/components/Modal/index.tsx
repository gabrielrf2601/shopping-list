import React from 'react';
import { View, ViewProps, Text, Modal, useWindowDimensions, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';
import { ModalProps } from './types';
import { theme } from '../../theme';

export const ModalConfirmDelete = ({ 
  visible,
  onClose, 
  onDelete, 
}: ModalProps) => {
  const deviceWidth = useWindowDimensions().width;
  const deviceHeight = useWindowDimensions().height;

  return (
    <Modal 
      visible={visible}
      animationType="fade"
      transparent={true}
    >
      <View 
        style={{ 
          width: deviceWidth,
          height: deviceHeight, 
          backgroundColor: 'rgba(0,0,0,0.5)', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}
      >
        <View style={styles.modalContainer}>
          <FontAwesome name="warning" size={60} color='orange' />
          <Text style={styles.modalText}>Tem certeza que deseja apagar este item?</Text>
          <View style={styles.buttonsContainer}>
              <Button color={theme.colors.tertiary} onPress={onClose} title="Cancelar" />
              <Button color={theme.colors.selectedColor} onPress={onDelete} title="Confirmar" />
          </View>
        </View>
      </View>
    </Modal>
  );
}