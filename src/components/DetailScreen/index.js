
import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { FoodImage, BadEmogi, CrossIcon, HeartIcon, InfoIcon } from "../../assets";
import { Header, Tag, SwipeCard } from "..";
import SwipeCards from 'react-native-swipe-cards';

const DetailScreen = ({ navigation }) => {
    const tags = [
        {
            name: 'Desserts',
            active: false
        },
        {
            name: 'Drinks',
            active: false
        },
        {
            name: 'Fish',
            active: false
        },
        {
            name: 'Salads',
            active: false
        },
        {
            name: 'Meat ',
            active: false
        },
        {
            name: 'More Filters ',
            active: true
        },
    ]
    const cards = [
        { text: 'Tomato', backgroundColor: 'red' },
        { text: 'Aubergine', backgroundColor: 'purple' },
        { text: 'Courgette', backgroundColor: 'green' },
        { text: 'Blueberry', backgroundColor: 'blue' },
        { text: 'Umm...', backgroundColor: 'cyan' },
        { text: 'orange', backgroundColor: 'orange' },
    ]
    return (
        <View style={styles.main}>
            <Header switchcart={true} />

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 15, }}>
                {
                    tags.map((item, index) => { return (<Tag key={index} item={item} />) })
                }
            </View>

            <SwipeCards
                showYup={false}
                showNope={false}
                showMaybe={false}
                cards={cards}
                renderCard={(cardData) => {
                    return (
                        <View style={styles.imgview}>
                            <Image style={styles.img} source={FoodImage} />
                            <View style={styles.nameprice}>
                                <Text style={styles.recipename}>Red Thai Curry</Text>
                                <Text style={styles.recipename}>£49.99</Text>
                            </View>
                        </View>
                    )
                }}
            />
            <View style={styles.iconview}>
                <TouchableOpacity onPress={() => { navigation.navigate('CategoryScreen') }} style={styles.iconsmall}>
                    <Image style={styles.icon} source={BadEmogi} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('CategoryScreen') }} style={styles.iconlarge}>
                    <Image style={styles.icon} source={CrossIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('CategoryScreen') }} style={styles.iconlarge}>
                    <Image style={styles.icon} source={HeartIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('CategoryScreen') }} style={styles.iconsmall}>
                    <Image style={styles.icon} source={InfoIcon} />
                </TouchableOpacity>
            </View>




        </View>
    );
};

const styles = StyleSheet.create({
    main: { backgroundColor: '#FFF', flex: 1, },
    txtview: { alignSelf: 'flex-start', width: '100%', paddingRight: 40 },
    txt: { fontFamily: 'Poppins-SemiBold', width: '100%', alignSelf: 'flex-start', margin: 20, borderBottomColor: '#DBDBDB', borderBottomWidth: 1, color: '#3B3B3B', fontSize: 25 },
    imgview: { overflow: 'hidden', borderRadius: 10, flex: 1, width: Dimensions.get('screen').width - 20, },
    img: { resizeMode: 'stretch', width: '100%', height: '100%' },
    iconview: { flexDirection: 'row', height: 90, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, },
    iconsmall: { justifyContent: 'center', alignItems: 'center', padding: 10, width: 50, height: 50, elevation: 3, backgroundColor: '#FFF', borderRadius: 40, },
    iconlarge: { justifyContent: 'center', alignItems: 'center', padding: 10, width: 65, height: 65, elevation: 3, backgroundColor: '#FFF', borderRadius: 40, },
    icon: { resizeMode: 'contain', flex: 1 },
    nameprice: { position: 'absolute', bottom: 10, left: 20, },
    recipename: { fontFamily: 'Poppins-SemiBold', color: '#FFF', fontSize: 20, },


})

export default DetailScreen;
