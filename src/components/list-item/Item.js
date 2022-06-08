import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Item = ({onPress, item}) => {
  return (
    <View style={styles.containerList}>
      <Text style={styles.texto}>{item.value}</Text>
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => onPress(item.id)}
      >
        <Text style={styles.texto}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    containerList:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal: 20,
        marginVertical:5,
        paddingVertical:10,
        paddingHorizontal: 10,
        borderRadius:5,
        backgroundColor:'#3B82F6'
      },
      deleteButton:{
        backgroundColor:'red',
        paddingVertical:8,
        paddingHorizontal:13,
        borderRadius: 80,
        color: '#fff',
      },
      texto:{
        color: '#fff',
        fontWeight:'bold',
        fontSize:18
      },
});

export default Item