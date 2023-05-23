import { View, Text, Image, Button, Pressable } from 'react-native'
import React from 'react'
import { deviceHeight } from './Dimensions'
import { deviceWidth } from './Dimensions'

export default function Login(props) {
  return (
    <View style={{height:deviceHeight, width:deviceWidth, backgroundColor:'white'}}>
       <View>
      <Image source={require('../assets/images/wasLg.png')} style={{ alignSelf:'center', height:250, width:250}}/>
      </View>

    <View style={{alignSelf:'center', marginTop:40}}>
    <Pressable onPress={()=>props.navigation.navigate("UserLogin")} title="User Login" style={{position:'absolute',backgroundColor:'white', borderColor:'#ffc0cb', borderWidth:4, alignSelf:'center', height:40,width:160, borderRadius:10}}>
        <Text style={{fontSize:15,color:'#ffc0cb', fontWeight:'bold', alignSelf:'center', textAlignVertical:'center', textAlign:'center', marginTop:5}}>
            User Login
        </Text>
        </Pressable>
        </View>
        
        <View>
        <Pressable onPress={()=>props.navigation.navigate("MonitorLogin")} style={{position:'absolute',backgroundColor:'white', borderColor:'#87CEEB', borderWidth:4, alignSelf:'center', height:40,width:160, borderRadius:10,marginTop:70}}>
        <Text style={{fontSize:15,color:'#87CEEB', fontWeight:'bold', alignSelf:'center', textAlignVertical:'center', textAlign:'center', marginTop:5}}>
            Monitor Login
        </Text>
        </Pressable>
        </View>


        <Text style={{marginTop:150, alignSelf:'center', textDecorationLine:'underline', fontWeight:'bold'}}>New To The App? Register Now</Text>
    </View>
  )
}