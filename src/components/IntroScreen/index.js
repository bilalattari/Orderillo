
import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
import { BackgrondIcon, FacebookIcon, AppleIcon, GoogleIcon } from "../../assets";
import { ButtonComponent } from "../";
import Navigation from '../Navigation';
const IntroScreen = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <View style={styles.backimgview}>
                <Text style={styles.title}>Orderillo</Text>
                <Image style={styles.backImage} source={BackgrondIcon} />
            </View>
            <View style={styles.mainview}>
                <Text style={styles.introtxt}>Hungry?{'\n'}Order now in seconds.{'\n'}No menus, just an app.</Text>
                <ButtonComponent onPress={()=>{navigation.navigate('LocationScreen')}} height={40}  Icon={FacebookIcon} isIcon={true} color={'#FFF'} text={'Login With Facebook'} />
                <ButtonComponent onPress={()=>{navigation.navigate('LocationScreen')}} height={40}  Icon={GoogleIcon} isIcon={true} color={'#FFF'} text={'Login With Google'} />
                <ButtonComponent onPress={()=>{navigation.navigate('LocationScreen')}} height={40}  Icon={AppleIcon} isIcon={true} color={'#FFF'} text={'Login With Apple'} />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: { backgroundColor: '#00AF90', flex: 1, },
    backimgview: { height: 300, alignItems: 'center', position: 'relative', top: 0, left: 0, right: 0, },
    backImage: { resizeMode: 'contain', width: '80%', height: '100%', },
    title: { position: 'absolute', top: 100, fontSize: 60, color: '#FFC82F', fontFamily: 'PermanentMarker' },
    introtxt: { fontSize: 25, color: '#FFFFFF', fontFamily: 'Poppins-SemiBold' },
    mainview: { alignItems: 'center',  flex:1, justifyContent:'space-around', top:-50 },

})

export default IntroScreen;
