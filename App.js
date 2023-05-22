import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Signin from './Screens/Signin/signin';
import Signup from './Screens/Signup/signup';
import SuccessOrder from './Screens/successOrder/successOrder';
import SaveAddress from './Screens/shipping address/saveAddress';
import OurStores from './Screens/location/ourStores';
import AllStores from './Screens/location/allStores';

export default function App() {
  return (
    // return your Screen here.
    // <Signup/>
    // <SuccessOrder/>
    // <SaveAddress/>
    // <OurStores/>
    <AllStores/>
  );
}

const styles = StyleSheet.create({});
