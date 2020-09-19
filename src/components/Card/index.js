
import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { AddIcon } from "../../assets";
const Card = ({ viewmorecolor, iconcolor, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.main}>
            <Text style={styles.txt}>Coca Cola 1, Ol</Text>
            <Text style={styles.detailtxt}>Some kind of fun description about your drink blablalalala, </Text>
            <View style={styles.priceview}>
                <Text style={styles.price}>$4.20</Text>
                <TouchableOpacity>
                    <Text style={[styles.viewmore, { color: viewmorecolor, borderBottomColor: viewmorecolor, borderBottomWidth: 1 }]}>view more</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={onPress} style={[styles.thouch, { backgroundColor: iconcolor }]}>
                <Image style={styles.addimg} source={AddIcon} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    main: { marginHorizontal: 20, marginVertical: 5, padding: 20, borderRadius: 5, overflow: 'hidden', borderWidth: 1, borderColor: '#DBDBDB' },
    thouch: { position: 'absolute', top: 0, right: 0, width: 35, height: 35, borderRadius: 3, justifyContent: 'center', alignItems: 'center' },
    addimg: { resizeMode: 'contain', },
    txt: { fontFamily: 'Poppins-SemiBold', fontSize: 15, color: '#3B3B3B' },
    detailtxt: { fontFamily: 'Poppins-Regular', fontSize: 14, color: '#3B3B3B' },
    price: { fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#3B3B3B' },
    viewmore: { fontFamily: 'Poppins-Regular', fontSize: 15, marginLeft: 50, borderBottomWidth: 1, height: 20 },
    priceview: { flexDirection: 'row', marginTop: 10, },
})

export default Card;
