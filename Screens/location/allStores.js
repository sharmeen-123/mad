import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import storeImg from '../../assets/storeImg.png'
import downArrow from '../../assets/downwardArrow.png'
import upwardArrow from '../../assets/upwardArrow.png'

export default function AllStores() {
    const [allInfo, setInfo] = useState([
        {
            image: storeImg,
            location: 'Shop # F-28 First Floor Emporium Mall LHR, Lahore, Punjab',
            closing: '5 PM',
            phone: '+92 307 8582318'
        },
        {
            image: storeImg,
            location: 'Shop # F-28 First Floor Emporium Mall LHR, Lahore, Punjab',
            closing: '5 PM',
            phone: '+92 307 8582318'
        },
        {
            image: storeImg,
            location: 'Shop # F-28 First Floor Emporium Mall LHR, Lahore, Punjab',
            closing: '5 PM',
            phone: '+92 307 8582318'
        },
    ])
    const [store, setStore] = useState(
        [
            {
                area: 'Lahore',
                stores: 3,
                opened: true,
            },
            {
                area: 'Islamabad',
                stores: 6,
                opened: false,
            },
            {
                area: 'Faisalabad',
                stores: 2,
                opened: false,
            }
        ]
    )

    const open = (ind) => {
        const updatedStore = [...store];
        updatedStore[ind].opened = !updatedStore[ind].opened;
        setStore(updatedStore);
    }

    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={styles.innerContainer}>
                    <Text style={styles.heading}>Store Locations</Text>
                    <View>
                        {store.map((val, ind) => {
                            return (
                                <View style={{ borderBottomWidth: 1, borderBottomColor: '#9B9B9B' }}>
                                    <View style={styles.locationView}>
                                        <Text style={styles.text}>{val.area}</Text>
                                        <Text style={styles.yellowText}>{val.stores} Stores</Text>
                                        {val.opened ?
                                            (<View>
                                            <TouchableOpacity onPress={() => open(ind)}>
                                                <Image source={upwardArrow}></Image>
                                            </TouchableOpacity>
                                                <View>
                                                </View>
                                            </View>) :
                                            (
                                                <TouchableOpacity onPress={() => open(ind)}>
                                                <Image source={downArrow}></Image>
                                                </TouchableOpacity>
                                                )}
                                    </View>

                                    {val.opened ?
                                        (<View>
                                            {
                                                allInfo.map((val, ind) => {
                                                    return (
                                                        <View style={styles.location}>
                                                            <View>
                                                                <Text style={styles.yellowText}>Paah le</Text>
                                                            </View>
                                                            <View style={styles.box2}>
                                                            <Image source={val.image}
                                                                    style={styles.image}>        
                                                            </Image>
                                                            <Text style={styles.graycolor}>
                                                                {val.location}
                                                            </Text>
                                                            </View>
                                                            <View style={styles.box2}>
                                                           
                                                            <Text style={styles.closeText}>
                                                                Closes
                                                            </Text>
                                                            <Text style={styles.timeText}>
                                                                {val.closing}
                                                            </Text>
                                                            <Text style={styles.graycolor}>
                                                                {val.phone}
                                                            </Text>
                                                            </View>
                                                        </View>
                                                    )
                                                })
                                            }
                                            </View>

                                        ) :
                                        (<View></View>)}
                                </View>
                            )
                        })}
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
    heading: {
        marginTop: 15,
        marginBottom: 20,
        color: 'black',
        fontSize: 26,
        fontFamily: "Poppins",
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    locationView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    location: {
        display: 'flex',
        backgroundColor: 'white',
        margin: 15,
        marginTop:0,
        borderRadius: 10,
        padding: 12,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    box2: {
        display: 'flex',
        flexDirection:'row',
        margin:10,
    },
    text: {
        // marginLeft: 10,
        color: 'black',
        fontSize: 17,
        fontFamily: "Poppins",
        fontWeight: 'bold'
    },
    image:{
        width:100,
        height: 60
    },
    graycolor: {
        marginLeft: 10,
        marginRight:60,
        color: '#9B9B9B',
        fontSize: 15,
        fontFamily: "Poppins",
        fontWeight: 'bold'
    },
    yellowText: {
        marginLeft: 10,
        color: '#FFC107',
        fontSize: 17,
        fontFamily: "Poppins",
        fontWeight: 'bold',
    },
    timeText: {
        marginLeft: 10,
        color: '#FFC107',
        fontSize: 15,
        fontFamily: "Poppins",
        fontWeight: 'bold',
    },
    closeText: {
        marginLeft: 10,
        color: 'black',
        fontSize: 15,
        fontFamily: "Poppins",
        fontWeight: 'bold',
    }

});
