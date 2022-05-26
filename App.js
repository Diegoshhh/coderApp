import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <TextInput style={styles.input} placeholder='search'/>
        <Button style={styles.btn} title='+'/>
      </View>

      <View style={styles.containerItem}>
       <Text style={styles.item}>Item</Text>
       <Text style={styles.item}>Item</Text>
       <Text style={styles.item}>Item</Text>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginTop:40,
  },
  content:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal:20,
    
  },
  input:{
    flex:1,
    height: 40,
    marginRight:10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  btn:{
    width: 140,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  containerItem:{
    backgroundColor:'#666',
    borderRadius:10,
    marginHorizontal: 20,
    marginVertical:20,
    alignItems:'flex-start',
    padding:10,
    height: 400,
  },
  item:{
    // flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor:'#fff',
    marginVertical:10,
    paddingVertical:10,
    paddingHorizontal:50,
  }
});
