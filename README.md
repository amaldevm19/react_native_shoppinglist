# react_native_shoppinglist
<b>Pre-requesties</b>

<li>[]- Download & install android studio & sdk</li>
<li>[]- check Path variable setting
<li>[]- Open android studio
<li>[]- then config => open sdk manager & verify the sdk
<li>[]- then config => open avd manager & run the emulator

In two ways you can build your App 

<li>Clone this repository

 <li>[]- Clone this repository
  git clone https://github.com/amaldevm19/react_native_shoppinglist.git

<li>[]- change directory
cd react_native_shoppinglist

<li>[]- run
npx react-native run-android

--------------------------------------OR----------------------------------------------------
<p>Build from scratch</P>

<pre> npm i -g react-native-cli </pre>
<pre> react-native init shoppinglist </pre>
<pre> cd shoppinglist </pre>
<p>Open project in VScode</p>
<pre> react-native start </pre>
<pre> react-native run-android </pre>
<p> install vector-icons</p>
<pre> npm i react-native-vector-icons </pre>
<p> Now link assets</p>
<p> Add react-native.config.js</p>
    <pre>module.exports = {
        dependencies: {
          'react-native-vector-icons': {
            platforms: {
              android: null, // disable Android platform, other platforms will still autolink
            },
          },
        },
      };
</pre>
<pre> react-native link react-native-vector-icons </pre>
<pre> npm i uuidv4  </pre>
<pre> npm I react-native-get-random-values </pre>
<p> Delete all from app.js,/p>
<p> import React </p>

<pre> import  React  from "react";</pre>
<p>Import basic UI component from react-native <p>
<pre>import {View, Text } from 'react-native';</pre>


[]- create an App component
const App = ()=>{
  return (
    <View>
      <Text>
        Hello world
      </Text>
    </View>
  )
}


[]- Export the App

export default App;


[]- Add some basic styling to View
 
<View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>


[]- Save and check in emulator
[]- Add some style to Text component

<Text style={{color:'darkslateblue', fontSize:30}}>


[]- Now modify the styles using StyleSheet component
[]- import StyleSheet component

import {View, Text, StyleSheet } from 'react-native';



[]- Create new style variable
const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
      color:'darkslateblue', 
      fontSize:30
    }
  }
)

[]- Apply style to View component
 <View style={styles.container}>
<Text style={styles.text}>
        	Hello world
      </Text>
 </View>


[]- Save the file and check emulator

[]- Let’s add an Image component

import {View, Text,Image, StyleSheet } from 'react-native';


[]- Add to View with a source property
 
<Image source={{uri : 'https://randomuser.me/api/portraits/men/1.jpg'}}/>


[]- Add some styling
 
<Image source={{uri : 'https://randomuser.me/api/portraits/men/1.jpg'}} style={
styles.img}/>


  img:{
      width:100,
      height:100,
	borderRadius:50
    }








[]- Overall App.js looks 
import  React  from "react";
import {View, Text,Image, StyleSheet } from 'react-native';

const App = ()=>{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello world
      </Text>
      <Image source={{uri : 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}/>
    </View>
  )
}
const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
      color:'darkslateblue', 
      fontSize:30
    },
    img:{
      width:100,
      height:100,
      borderRadius:50
    }
  }
)
export default App;

[]- Check the UI




[]- Now modify the App.js
import  React  from "react";
import {View, Text, StyleSheet } from 'react-native';

const App = ()=>{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello world
      </Text>
    </View>
  )
}
const styles = StyleSheet.create(
  {
    container:{
      flex:1,
     
    }
  }
)
export default App;

[]- Create components\Header.js
[]- Import
import  React  from "react";
import {View, Text, StyleSheet } from 'react-native';


[]- Create function called Header and export header
const Header = ()=>{
  return (
    <View style={styles.header}>
      <Text style={styles.text}>
        Shopping List
      </Text>
    </View>
  )
}
export default Header;
[]- Add some styling
const styles = StyleSheet.create(
  {
    header:{
      height:60,
      padding:50,
      backgroundColor:'darkslateblue'
     
    },
    text:{
        color:'#fff',
        fontSize:23,
        textAlign:'center'
    }
    
  }
)

[]- Import Header to App.js

import Header from './components/Header'


[]- delete Text view from App.js
const App = ()=>{
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  )
}





[]- Add heading as Title props
[]- Modify Header.js
const Header = (props)=>{
  return (
    <View style={styles.header}>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </View>
  )
}

[]- Pass Heading as title property from App.js
return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
    </View>
  )

[]- pullout the title props
 const Header = ({title})=>{
  return (
    <View style={styles.header}>
      <Text style={styles.text}>
        {title}
      </Text>
    </View>
  )
}






[]- To add a default props add below Header component
const Header = () => {

*********
}

Header.defaultProps = {
    title:'Shopping List'
}

[]- To work with data, use state in App.js

import  React, {useState} from "react";


[]- create data model in App.js
const App = ()=>{
const [items, setItems] = useState([
    {}
  ])

 []- Import react-native-get-random-values & uuid
import 'react-native-get-random-values';
import {uuid} from 'uuidv4';

[]- Add initial hard coded data to the empty object array
const [items, setItems] = useState([
    {id: uuid(), text:'Milk'},
    {id: uuid(), text:'Egg'},
    {id: uuid(), text:'Juice'}
  ])


[]- Import FlatList to display the data
import {View, Text, StyleSheet, FlatList } from 'react-native';

[]- Now add FlatList to ui
return (
    <View style={styles.container}>
      <Header />
      <FlatList data={items} renderItem={({item})=><Text>{item.text}</Text>}> 
      </FlatList>
    </View>
  )

[]- Create new component components\ListItem.js
[]- Modify ListItem.js
import  React  from "react";
import {View, Text, StyleSheet } from 'react-native';

const ListItem = ({})=>{
  return (
    
  )
}
const styles = StyleSheet.create(
  
)
export default ListItem;

[]- Import a TouchableOpacity button

import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';





[]- Modify ListItem()
const ListItem = ({item})=>{
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemViews}>
          <Text style={styles.listItemText}>
              {item.text}
          </Text>
      </View>
    </TouchableOpacity>
  )
}

[]- Create Styles
 const styles = StyleSheet.create(
  {
      listItem:{
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth:1,
        borderColor:'#eee'
      },
      listItemViews:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
      },
      listItemText:{
        fontSize:18
      }
  }
)


[]- Import ListItem to App.js

import ListItem from "./components/ListItem";


[]- Modify FlatList
<FlatList data={items} renderItem={({item})=><ListItem item={item}/>}/> 

[]- Add delete functionality to components\ListItem.js
[]- Import icon

import Icon from 'react-native-vector-icons/dist/FontAwesome';


[]- Add Icon component 

<Icon name="remove" size={30} color='firebrick'/>



[]- Add deleteitem () to App.js
const deleteItem = (id)=>{
    setItems(prevItems => {
      return prevItems.filter(item=> item.id != id)
    })
  }


[]- Pass in deleteItem as a prop in App.js

<ListItem item={item} deleteItem={deleteItem}/>


[]- modify components\ListItem.js to catch deleteItem prop

const ListItem = ({item, deleteItem})=>{...


[]- Add an onPress event to remove Icon

<Icon name="remove" size={30} color='firebrick' onPress={()=>deleteItem(item.id)}/>


[]- Check the remove functionality
[]- Add item functionality
[]- Create now component components\additem.js
[]- Import 

import  React  from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


[]- Add AddItem component

const AddItem = ()=>{

    return (

    )
}

[]- create style
const styles = StyleSheet.create(
    
)

[]- Export component

export default AddItem;


[]- Now Add a View
 <View>
 </View>

[]- Add TextInput for inputting Text
 <View>
     <TextInput />
 </View>

[]- Add TouchableOpacity below the TextInput
 <View>
      	<TextInput />
  	<TouchableOpacity>
             
  	</TouchableOpacity>
 </View>





[]- Add Text component to name the button
 <View>
      <TextInput />
      <TouchableOpacity>
          <Text>
          </Text>
      </TouchableOpacity>
 </View>

[]- Add Icon for button
 <View>
       <TextInput />
       <TouchableOpacity>
           <Text>
               <Icon/>
            </Text>
       </TouchableOpacity>
 </View>

[]- Now import AddItem to App.js

import AddItem from "./components/Additem";


[]- Add AddItem component to UI
<Header />
<AddItem/>

[]- Check the app





[]- Modify UI to add some Style
 	<View>
            <TextInput
            placeholder='Add new item...'
            style={styles.input}
            />
            <TouchableOpacity
            style={styles.btn}>
                <Text
                style={styles.btnText}>
                    <Icon/>Add Item
                </Text>
            </TouchableOpacity>
      </View>

[]- Add styles
const styles = StyleSheet.create({
    input:{
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn:{
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    },
    btnText:{
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }
})





[]- Add a state to handle text input
[]- Import

import  React, {useState}  from "react";


[]- Add components\Additem.js

const [itemText, setItem] = useState('');


[]- Add onChangeText event to TextInput
 <TextInput
  placeholder='Add new item...'
  style={styles.input}
  onChangeText={onChange}
  />

[]- Add onChange method

const onChange = textValue => setText(textValue);


[]- Add addItem() in App.js
 const addItem = (text)=>{
    setItems(prevItems =>{
       return [{id:uuid(), text },...prevItems]
    })
  }

[]- Pass in addItem as a prop
 
<AddItem addItem={addItem}/>


[]- Modify components\Additem.js to handle add item method

const AddItem = ({addItem})=>{...


[]- Add onPress event to TouchableOpacity
 <TouchableOpacity
            style={styles.btn}
            onPress={()=> {addItem(text); setText('')}} >

[]- Modify TextInput 
<TextInput
            placeholder='Add new item...'
            style={styles.input}
            onChangeText={onChange}
            value={text}
            />

[]- Check 
[]- A validation to prevent adding empty text
[]- Bring in Alert component to App.js
import {View, Text, StyleSheet, FlatList, Alert } from 'react-native';

[]- Add validation before setting item
 const addItem = (text)=>{
    if(!text){
      Alert.alert('Error','Please enter text',[{text:'OK'}])
    }else{
      setItems(prevItems =>{
        return [{id:uuid(), text },...prevItems]
      })
    }
  }

[]- Check the app








Final App files
package.json
{
  "name": "shoppinglist",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
    "react": "16.9.0",
    "react-native": "0.61.5",
    "react-native-get-random-values": "^1.3.0",
    "react-native-vector-icons": "^6.6.0",
    "uuidv4": "^6.0.6"
  },
  "devDependencies": {
    "@babel/core": "^7.8.7",
    "@babel/runtime": "^7.8.7",
    "@react-native-community/eslint-config": "^0.0.7",
    "babel-jest": "^25.1.0",
    "eslint": "^6.8.0",
    "jest": "^25.1.0",
    "metro-react-native-babel-preset": "^0.58.0",
    "react-test-renderer": "16.9.0"
  },
  "jest": {
    "preset": "react-native"
  }
}






[]- App.js
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


components\Header.js
import  React  from "react";
import {View, Text, StyleSheet } from 'react-native';

const Header = ({title})=>{
  return (
    <View style={styles.header}>
      <Text style={styles.text}>
        {title}
      </Text>
    </View>
  )
}
Header.defaultProps = {
    title:'Shopping List'
}
const styles = StyleSheet.create(
  {
    header:{
      height:60,
      padding:50,
      backgroundColor:'darkslateblue'
     
    },
    text:{
        color:'#fff',
        fontSize:23,
        textAlign:'center'
    }
    
  }
)
export default Header;


components\ListItem.js
import  React  from "react";
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem})=>{
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemViews}>
          <Text style={styles.listItemText}>{item.text}</Text>
          <Icon name="remove" size={30} color='firebrick' onPress={()=>deleteItem(item.id)}/>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create(
  {
      listItem:{
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth:1,
        borderColor:'#eee'
      },
      listItemViews:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
      },
      listItemText:{
        fontSize:18
      }
  }
)
export default ListItem;





components\Additem.js
import  React, {useState}  from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem})=>{
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);
    //console.log(text)
    return (
        <View>
            <TextInput
            placeholder='Add new item...'
            style={styles.input}
            onChangeText={onChange}
            value={text}
            />
            <TouchableOpacity
            style={styles.btn}
            onPress={()=> {addItem(text); setText('')}} >
                <Text
                style={styles.btnText}>
                    <Icon
                    name='plus'
                    size={20}
                    
                    />Add Item
                </Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    input:{
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn:{
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    },
    btnText:{
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default AddItem;





Build APK for distribution

[]- Build apk file
[]- Generate keytool
keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias –
keyalg RSA -keysize 2048 -validity 10000

[]- Place the my-upload-key.keystore file under the android/app directory in your project folder. android\app\my-upload-key.keystore

[]- Edit the file  android\gradle.properties, and add the following (replace ***** with the correct keystore password, alias and key password),
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****

[]- Add signing config to your app’s gradle config android\app\build.gradle
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...

[]- Next bundle the app
react-native bundle --platform android --dev false --entry-file index.js –
bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

[] cd android
[]- Run 
./gradlew assembleRelease -x bundleReleaseJsAndAssets
[]- You can find apk in
android\app\build\outputs\apk\release

Continued….
