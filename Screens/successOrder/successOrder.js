import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import success from '../../assets/success.png'
import React, {useState} from 'react';

export default function SuccessOrder() {
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [error, setError] = useState(false)

    const signIn = () => {
        if(!email){
            setError("Please enter email")
        }else if(!password){
            setError("Please enter password")
        }else{
            setError(false)
        console.log(email, "*****",password)}
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={success} resizeMode="cover" style={styles.container}>
            <View style={styles.body}>
                    <Text style={styles.success}>Success!</Text>
                    <Text style={styles.paragraph}>Your order is completed.</Text>
                    <Text style={styles.paragraph}>Thank you for choosing Us!</Text>
                    <TouchableOpacity style={styles.button} elevation={20}>
                        <Text style={styles.text}>Continue Shopping</Text>
                    </TouchableOpacity>
          </View>
            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    body: {
        display: 'flex',
        flex: 1,
        marginTop:30,
        alignItems: 'center',
        // justifyContent: 'center',
        // alignContent: 'center',
    },
   success:{
    color:'black',
    fontSize:40,
    fontWeight:'bold',
    fontFamily:'Poppins',
    marginBottom:15
   },
   text:{
    color:'#FFC107',
    fontSize:15,

    fontFamily:'Poppins'
   },
   paragraph:{
    color:'black',
    fontSize:15,
    fontWeight:'bold',
    fontFamily:'Poppins'
   },
   button:{
    backgroundColor:'#ffffff',
    marginTop:15,
    borderRadius:30,
    height : 40,
    width: '45%', 
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.16,
    shadowRadius: 16,
   }
});
