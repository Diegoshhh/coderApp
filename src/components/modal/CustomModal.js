import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'



const CustomModal = ({children, visible, onRequestClose, animationType}) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType={animationType}
        visible={visible}
        onRequestClose={onRequestClose}
      >
        {children}
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default CustomModal
