import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import storeImg from '../../assets/storeImg.png'
import location from '../../assets/Vector.png'
import clock from '../../assets/clock.png'
import phone from '../../assets/phone.png'

export default function OurStores() {
    const days = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
    const [today, setToday] = useState();
    const [store, setStore] = useState({
        area: 'Lahore',
        image: storeImg,
        location: 'Shop # F-28 First Floor Emporium Mall LHR, Lahore, Punjab',
        closing: '5 PM',
        closingWeek: [
            '9 AM - 5 PM', '12 - 8 PM', 'Closed', '9 AM - 5 PM', '9 AM - 5 PM', '9 AM - 5 PM', '9 AM - 5 PM'
        ],
        phone: '+92 307 8582318'
    })

    const getCurrentDayOfWeek = () => {
        const currentDate = new Date();
        const options = { weekday: 'long' };
        const day = currentDate.toLocaleDateString(undefined, options);
        return('day is', day.split(',')[0])
        

    };

    useEffect(() => {
        setToday(getCurrentDayOfWeek());
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={styles.innerContainer}>
                    <Text style={styles.heading}>{store.area}</Text>
                    <Image
                        source={store.image}
                        style={styles.logo}></Image>
{/* 1st container */}
                    <View style={styles.location}>
                        <Image
                            source={location}
                            style={styles.locIcon}></Image>
                        <Text style={styles.text}>{store.location}</Text>
                    </View>
{/* 2nd container */}
                    <View style={styles.time}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Image
                                source={clock}
                                style={styles.locIcon}></Image>
                            <Text style={styles.closing}>Closes
                                <Text style={styles.yellowText}> {store.closing}</Text>
                            </Text>
                        </View>

                        <View style={{ padding: 15 }}>
                            {store.closingWeek.map((val, ind) => {
                                return (
                                    <View >
                                        {days[ind] == today ? (<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <View style={{ flex: 1 }}><Text style={styles.yellowText}> {days[ind]}</Text></View>
                                            <View style={{ flex: 1 }}><Text style={styles.yellowText}> {val}</Text></View>
                                        </View>) 
                                        : 
                                        (<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <View style={{ flex: 1 }}><Text style={styles.text}> {days[ind]}</Text></View>
                                            <View style={{ flex: 1 }}><Text style={styles.text}> {val}</Text></View>
                                        </View>)}

                                        {/* <Text style={styles.text}> {days[ind]} {"     "+val}</Text> */}
                                    </View>
                                )
                            })}
                        </View>
                    </View>

{/* 3rd container */}
                    <View style={styles.location}>
                        <Image
                            source={phone}
                            style={styles.locIcon}></Image>
                        <Text style={styles.text}>{store.phone}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    innerContainer: {
        margin: 15,
    },
    heading: {
        marginTop: 15,
        color: 'black',
        fontSize: 26,
        fontFamily: "Poppins",
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    logo: {
        marginTop: 5,
        borderRadius: 10
    },
    location: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        // justifyContent:'center',
        alignContent: 'center',

        marginTop: 10,
        borderRadius: 10,
        padding: 25,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    time: {
        display: 'flex',
        backgroundColor: 'white',
        // justifyContent:'center',
        alignContent: 'center',

        marginTop: 10,
        borderRadius: 10,
        padding: 25,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    text: {
        marginLeft: 15,
        color: '#9B9B9B',
        fontSize: 15,
        fontFamily: "Poppins",
    },
    closing: {
        marginLeft: 15,
        color: 'black',
        fontSize: 15,
        fontFamily: "Poppins",
        fontWeight: 'bold'
    },
    yellowText: {
        marginLeft: 15,
        color: '#FFC107',
        fontSize: 15,
        fontFamily: "Poppins",
    }

});
