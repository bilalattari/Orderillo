
import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { MiddleIcon } from "../../assets";
import { Header, ButtonComponent } from "../";
const LocationScreen = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <Header switchcart={false} />
            <View style={styles.middle}>
                <Image style={styles.middleicon} source={MiddleIcon} />
            </View>
            <Text style={styles.txt}>Nearly there!</Text>
            <Text style={styles.detail}>Would you like us to show you recommendations based on your dietary preferences?</Text>
            <ButtonComponent onPress={()=>{navigation.navigate('ItemScreen')}}  height={40} isIcon={false} color={'#00AF90'} text={'Yes'} />
            <ButtonComponent onPress={()=>{navigation.navigate('ItemScreen')}}  height={40} isIcon={false} color={'#00AF90'} text={'No, continue'} />

        </View>
    );
};

const styles = StyleSheet.create({
    main: { backgroundColor: '#FFF', flex: 1, alignItems: 'center' },
    middle: { justifyContent: 'center', alignItems: 'center', top: -40, },
    middleicon: { resizeMode: 'contain', width: 80, height: 80 },
    txt: { fontFamily: 'Poppins-SemiBold', top: -20, textAlign: 'center', color: '#3B3B3B', fontSize: 25 },
    detail: { marginBottom: 40, fontFamily: 'Poppins-Regular', textAlign: 'center', color: '#3B3B3B', fontSize: 18 },


})

export default LocationScreen;
