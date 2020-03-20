import  React, {useState} from "react";
import {View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from "./components/ListItem";
import AddItem from "./components/Additem";
import 'react-native-get-random-values';
import {uuid} from 'uuidv4';

const App = ()=>{
  const [items, setItems] = useState([
    {id: uuid(), text:'Milk'},
    {id: uuid(), text:'Egg'},
    {id: uuid(), text:'Juice'}
  ]);
  const deleteItem = (id)=>{
    setItems(prevItems => {
      return prevItems.filter(item=> item.id != id)
    })
  }
  const addItem = (text)=>{
    if(!text){
      Alert.alert('Error','Please enter text',[{text:'OK'}])
    }else{
      setItems(prevItems =>{
        return [{id:uuid(), text },...prevItems]
      })
    }
  }
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item})=><ListItem item={item} deleteItem={deleteItem} />}/> 
    </View>
  )
}
const styles = StyleSheet.create(
  {
    container:{
      flex:1,
     
    },
    
  }
)
export default App;