import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import background from '../../assets/bg-image.png'
import logo from '../../assets/logo.png'
import mail from '../../assets/mail.png'
import lock from '../../assets/lock.png'
import React, {useState} from 'react';

export default function Signin() {
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
            <ImageBackground source={background} resizeMode="cover" style={styles.container}>
                <View
                    style={styles.body}>
                    <Image
                        source={logo}
                        style={styles.logo}></Image>
                    <Text
                        style={styles.heading}>
                        Let's dive into a world of
                        <Text style={styles.yellowColor}> fashion </Text>
                         together!
                    </Text>
                    <View style={styles.container2}>
                    <View style={styles.textfields}>
                        <View
                            style={styles.textField}>
                            <Image
                                source={mail}
                                style={styles.textFieldLogo}></Image>
                            <TextInput
                                label='email'
                                style={{ width: "85%", color: '#000000' }}
                                mode='outlined'
                                underlineColorAndroid='transparent'
                                placeholder="Email"
                                placeholderTextColor={'#BABABA'}
                                autoFocus={true}
                                onChangeText={setEmail}
                            >

                            </TextInput>
                        </View>
                        <View
                            style={styles.textField}>
                            <Image
                                source={lock}
                                style={styles.textFieldLogo}></Image>
                            <TextInput
                                label='password'
                                style={{ width: "85%", color: '#000000' }}
                                mode='outlined'
                                underlineColorAndroid='transparent'
                                placeholder="Password"
                                placeholderTextColor={'#BABABA'}
                                secureTextEntry={true}
                                onChangeText={setPassword}
                            >

                            </TextInput>
                        </View>
                        {/* {email.length == 0? (<Text></Text>):(<View></View>)} */}

                    </View>
                    <Text
                        style={styles.heading}>
                        Forgot Password
                        <Text style={styles.yellowColor}> ?</Text>
                    </Text>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={signIn}>
                            <Text 
                                style={styles.buttonText}>
                                Sign In
                            </Text>
                    </TouchableOpacity>
                    {error? (<Text style={styles.error}>
                        {error}
                    </Text>):(<View></View>)}
                    </View>
                    <Text
                        style={styles.signup}>
                        Didn't have an account? 
                        <Text style={styles.yellowColor}> Sign Up Here</Text>
                    </Text>

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
        alignItems: 'center',
        justifyContent: 'center',
        // alignContent: 'center',
    },
    container2: {
        display:'flex',
        width:'90%',
        alignItems:'center'
        
    },
    heading: {
        marginTop:5,
        color: '#ffffff',
        fontSize: 15,
        fontFamily: "Poppins",
        fontWeight: 'bold'
    },
    signup:{
        marginTop:5,
        color: '#ffffff',
        fontSize: 15,
        fontFamily: "Poppins",
    },
    yellowColor: {
        color: '#FDA401'
    },
    textfields: {
        marginTop: 80
    },
    textField: {
        backgroundColor: '#ffffff',
        color: '#000000',
        width: '100%',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 12
    },
    textFieldLogo: {
        alignSelf: 'center',
        margin: 5
    },
    button:{
        backgroundColor:'#FDA401',
        width:'95%',
        borderRadius:10,
        height:50,
        marginTop:29,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#ffffff',
        fontSize: 15,
        fontFamily: "Poppins",
        fontWeight: 'bold'
        
    },
    error:{
        color:'#FDA401',
        fontSize: 15,
        fontFamily: "Poppins",
        fontWeight: 'bold',
        alignSelf:'flex-start',
        marginLeft:20
    }
});
