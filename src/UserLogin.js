import { View, Text, Image, TextInput, Pressable } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'

export default function UserLogin() {
  return (
    <View style={{backgroundColor:'#ffc0cb', height:deviceHeight, width:deviceWidth}}>
        <Image source={require('../assets/images/wasLg.png')} style={{height:200, width:200, alignSelf:'center'}}/>

        <Text style={{alignItems:'center', alignSelf:'center', fontSize:30, color:'white', fontWeight:'bold', fontFamily:'monotype', textDecorationLine:'underline'}}>User Login</Text>
<View>
<TextInput placeholder='Email' placeholderTextColor='white'  onChangeText={()=>{}} style={{ paddingHorizontal:10,height:35, width:deviceWidth-70, alignSelf:'center', borderRadius:20, borderColor:'white', borderWidth:2, color:'white', fontWeight:'bold', marginTop:20}}></TextInput>

<TextInput placeholder='Password' placeholderTextColor='white'  onChangeText={()=>{}} style={{ paddingHorizontal:10,height:35, width:deviceWidth-70, alignSelf:'center', borderRadius:20, borderColor:'white', borderWidth:2, color:'white', fontWeight:'bold',marginTop:20}}></TextInput>
</View>
<Pressable onPress={()=>props.navigation.navigate("UserLogin")} title="User Login" style={{backgroundColor:'#00000000', borderColor:'white', borderWidth:4, alignSelf:'center', height:40,width:160, borderRadius:10,marginTop:20}}>
        <Text style={{fontSize:15,color:'white', fontWeight:'bold', alignSelf:'center', textAlignVertical:'center', textAlign:'center', marginTop:5}}>
            Login
        </Text>
        </Pressable>

        <Text style={{marginTop:20, alignSelf:'center', textDecorationLine:'underline', fontWeight:'bold', color:'black'}}>Forgot Password?</Text>
        <Text style={{marginTop:20, alignSelf:'center', textDecorationLine:'underline', fontWeight:'bold', color:'black'}}>New user? Register</Text>
    </View>
  )
}