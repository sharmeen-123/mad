import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, {useState} from 'react';

export default function SaveAddress() {
    const [name, setName] = useState(false)
    const [address, setAddress] = useState(false)
    const [road, setRoad] = useState(false)
    const [city, setCity] = useState(false)
    const [country, setCountry] = useState(false)
    const [error, setError] = useState(false)

    const signIn = () => {
        if(!name){
            setError("Please enter your name")
        }else if(!address){
            setError("Please enter your address")
        }else if(!road){
            setError("Please enter road")
        }else if(!city){
            setError("Please enter your city")
        }else if(!country){
            setError("Please enter your country")
        }
        else{
            setError(false)}
    }
    return (
        <View style={styles.container}>
        <ScrollView >
                <View
                    style={styles.body}>
                    <Text style={styles.heading}>Shipping Address</Text>
                    <View style={styles.container2}>
                    <View style={styles.textfields}>
                        <View
                            style={styles.textField}>
                            {/* <Text styles={styles.labelText}>Name</Text> */}
                            <TextInput
                                label="Full Name"
                                style={styles.textInput}
                                mode="outlined"
                                underlineColorAndroid='transparent'
                                placeholder="Full Name"
                                placeholderTextColor={'#BABABA'}
                                autoFocus={true}
                                selectionColor="orange"
                                activeOutlineColor="gray"
                                outlineColor="white"
                                value = {name}
                                onChangeText={setName}
                           /> 
                           
                        </View> 
                        <View
                            style={styles.textField}>
                            {/* <Text styles={styles.labelText}>Name</Text> */}
                            <TextInput
                                label="Address"
                                style={styles.textInput}
                                mode="outlined"
                                underlineColorAndroid='transparent'
                                placeholder="Address"
                                placeholderTextColor={'#BABABA'}
                                selectionColor="orange"
                                activeOutlineColor="gray"
                                outlineColor="white"
                                value = {address}
                                onChangeText={setAddress}
                           /> 
                           
                        </View> 
                        <View
                            style={styles.textField}>
                            {/* <Text styles={styles.labelText}>Name</Text> */}
                            <TextInput
                                label="Road"
                                style={styles.textInput}
                                mode="outlined"
                                underlineColorAndroid='transparent'
                                placeholder="Road"
                                placeholderTextColor={'#BABABA'}
                                selectionColor="orange"
                                activeOutlineColor="gray"
                                outlineColor="white"
                                value = {road}
                                onChangeText={setRoad}
                           /> 
                           
                        </View> 
                        <View
                            style={styles.textField}>
                            {/* <Text styles={styles.labelText}>Name</Text> */}
                            <TextInput
                                label="City"
                                style={styles.textInput}
                                mode="outlined"
                                underlineColorAndroid='transparent'
                                placeholder="City"
                                placeholderTextColor={'#BABABA'}
                                selectionColor="orange"
                                activeOutlineColor="gray"
                                outlineColor="white"
                                value = {city}
                                onChangeText={setCity}
                           /> 
                           
                        </View> 
                        <View
                            style={styles.textField}>
                            {/* <Text styles={styles.labelText}>Name</Text> */}
                            <TextInput
                                label="Country"
                                style={styles.textInput}
                                mode="outlined"
                                underlineColorAndroid='transparent'
                                placeholder="Country"
                                placeholderTextColor={'#BABABA'}
                                selectionColor="orange"
                                activeOutlineColor="gray"
                                outlineColor="white"
                                value = {country}
                                onChangeText={setCountry}
                           /> 
                           
                        </View> 
                       
                        {error? (<Text style={styles.error}>
                        {error}
                    </Text>):(<View></View>)}

                        <TouchableOpacity 
                        style={styles.button}
                        onPress={signIn}>
                            <Text 
                                style={styles.buttonText}>
                                SAVE ADDRESS
                            </Text>
                    </TouchableOpacity>
                   

                    </View>
                   
                    
                    </View>
                    
                </View>
</ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F5F5F5'
    },
    body: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        // alignContent: 'center',
    },
    container2: {
        display:'flex',
        width:'90%',
        alignItems:'center'
        
    },
    heading: {
        marginTop:35,
        color: 'black',
        fontSize: 26,
        fontFamily: "Poppins",
        alignSelf:'flex-start',
        marginLeft:15
    },
    labelText: {
        marginTop:35,
        color: 'black',
        fontSize: 26,
        fontFamily: "Poppins",
        alignSelf:'flex-start',
        marginLeft:15
    },
    textfields: {
        marginTop: 10,
        width: '100%',

    },
    textField: {
        backgroundColor: 'white',
        color: '#000000',
        width: '100%',
        borderRadius: 5,
        // display: 'flex',
        marginTop: 12,
    },
    textInput:{
        width: "90%", 
        color: '#000000', 
        height: 70, 
        padding:20,
    },
    button:{
        backgroundColor:'#FDA401',
        width:'100%',
        borderRadius:50,
        height:50,
        marginTop:55,
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
