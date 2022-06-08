import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomModal from './src/components/modal/CustomModal';
import Item from './src/components/list-item/Item';
import Inputs from './src/components/input/Inputs';


export default function App() {

  const [text, setText] = useState('')
  const [list, setList] = useState([])


  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const handleInput = (text) => {
    setText(text)
  }

  const addItem = () => {
    if(text !== ''){
      setList((currentList) => [
        ...currentList,
        {id: Math.random(), value: text},
      ])
      setText('')
    }
  }

  const onHandleDelete = (id) => {
    setList(currentList => currentList.filter(item => item.id !== id))
    setItemSelected({}) 
    setModalVisible(!modalVisible)
  }

  const onHandleModal = (id) => {
    setItemSelected(list.filter(item => item.id === id)[0])
    setModalVisible(!modalVisible)
  }

  const renderItem= ({item}) => (
    <Item
      item={item}
      onPress={onHandleModal}
    />
  )

  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Lista de Tareas</Text>
      </View>

      <View style={styles.content}>
        <Inputs
          placeholder='New Task'
          style={styles.input}
          placeholderTextColor={'#6b4e71'}
          value={text}
          onChangeText={text => handleInput(text)}

        />
        <Pressable
          style={styles.btnAgregar}
          onPress={addItem}
        >
          <Text style={styles.textAgregar}>Agregar</Text>
        </Pressable>
      </View>

      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

        <CustomModal
          animationType='slide'
          onRequestClose={() => null}
          visible={modalVisible}
        >
          <TouchableOpacity 
            style={styles.modalContainer}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View>
              <Text style={styles.modalTitle}>Delete Item</Text>
            </View>

            <View style={styles.containerTextModal}>
              <Text style={styles.modalText}>Estas segundo que deseas eliminar{' '} 
                <Text style={styles.modalMessage}>{itemSelected.value}</Text>?
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => onHandleDelete(itemSelected.id)}
              color='red'
              style={styles.btn}
            >
              <Text style={styles.textBtn}>Eliminar Item</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </CustomModal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
    marginTop:40,
  },

  containerTitulo:{
    alignItems:'center',
    backgroundColor:'#3B82F6',
    paddingVertical: 30,
  },
  titulo:{
    fontSize:25,
    fontWeight:'bold',
    color: '#fff'
  },

  content:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginHorizontal:20,
    marginVertical:20,
  },
  btnAgregar:{
    backgroundColor:'#3B82F6',
    paddingHorizontal:15,
    paddingVertical:12,
    borderRadius:5,
  },
  textAgregar:{
    color: '#fff',
    fontSize:18,
    fontWeight:'bold'
  },
  containerItem:{
    marginHorizontal:20,
    marginVertical:20,
    height: 400,
  },
  item:{
    borderWidth: 1,
    borderRadius:5,
    backgroundColor:'#fff',
    marginVertical:10,
    paddingVertical:10,
    borderColor: 'gray',
    textAlign:'center',
  },

  modalContainer:{
    flex: 1,
    backgroundColor:'#3B82F6',
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1.25,
        shadowRadius: 3.84,

        elevation: 5,
  },
  modalTitle:{
    color: '#fff',
    fontSize:24,
    fontWeight:'bold',
  },
  containerTextModal:{
    color: '#fff',
    marginVertical:30,
  },
  modalText:{
    fontSize:18,
    marginHorizontal:20,
    color: '#fff',
  },
  modalMessage:{
    fontSize:19,
    color: '#fff',
    fontWeight:'bold',
  },
  btn:{
    paddingVertical:15,
    paddingHorizontal: 30,
    backgroundColor:'red',
    borderRadius: 10,
  },
  textBtn:{
    color: '#fff',
    fontSize:17,
    fontWeight:'700'
  },
});
