import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SmartTrackerIcon from '../../assets/smart-tracker-icon';


const Login = ({navigation}:any) => {
    const [password, setPassword] = useState ('')
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <SmartTrackerIcon/>
        <Text style={styles.logo}>MetaMask</Text>
        </View>
<TextInput 
placeholder='Enter password'
placeholderTextColor={'#4F4F4F'}
secureTextEntry
value={password}
onChangeText={setPassword}
style={styles.input}

/>
<View style={styles.fingerPrintView}>


<Text style={styles.textUnlock}>Unlock with Biometrics?</Text>
<Image source={require('../../assets/switch-on.png')}/>
</View>
<TouchableOpacity style={styles.button} onPress={()=> navigation.replace('MainTabs')}>
<Text style={styles.btnText}>Unlock</Text>
</TouchableOpacity>

<Pressable>
    <Text style={styles.forgotText}>Forgot Password?</Text>
</Pressable>
<View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>

<Pressable>
    <Text style={styles.resetText}>Reset Wallet</Text>
</Pressable>
</View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#061A3C',
        padding:24
    
    },
    header:{
alignItems:'center',
justifyContent:'center'
    },
    logo:{
        fontSize:40,
        fontWeight:'800',
        color:'white',
        marginVertical:20
    },
    input:{
        width:'100%',
        height:56,
        borderRadius:8,
        backgroundColor:'#132D53',
        color:'white',
        paddingHorizontal:16,
        borderWidth:1,
        borderColor:'#4F4F4F',
        marginBottom:16,
        fontSize:16,
        fontWeight:'600'
    },
    fingerPrintView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:12,
        alignItems:'center'
    },
    textUnlock:{
        fontSize:18,
        fontWeight:'600',
        color:'white'
    },
    button:{
        width:'100%',
        height:56,
        borderRadius:25,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        marginTop:6,
    },
    btnText:{
        color:'black',
        fontSize:20,
        fontWeight:'700'
    },
    forgotText:{
        marginTop:20,
        color:'#357EC7',
        fontSize:18,
        fontWeight:'600',
        textAlign:'center'
    },
    resetText:{
        marginTop:20,
        color:'#357EC7',
        fontSize:18,
        fontWeight:'600',
        textAlign:'center'
    },

})