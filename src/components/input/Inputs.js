import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Inputs = ({
    placeholder,
    style, 
    placeholderTextColor = '#212121', 
    value, 
    onChangeText, 
    onBlur = () => null, 
    onFocus = () => null,
    editable,
    ...props
}) => {

    const onHandleChangeText = (text) => {
        onChangeText(text)
    }
    const onHandleBlur = () => {
        onBlur()
    }
    const onHandleFocus = () => {
        onFocus()
    }

  return (
    <TextInput 
        {...props}
        placeholder={placeholder}
        style={[styles.input, {...style}]}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onFocus={onHandleFocus}
        onBlur={onHandleBlur}
        onChangeText={onHandleChangeText}
    />
  )
}

const styles = StyleSheet.create({
  input:{
    flex:1,
    height: 50,
    marginRight:10,
    borderColor: '#3B82F6',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default Inputs