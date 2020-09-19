
import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

const Tag = ({ item }) => {
    // console.log(item);
    return (
        <TouchableOpacity style={[styles.button, item.active ? { borderColor:'#FFC82F' } : {borderColor:'#DBDBDB'}]}>
            <Text style={[styles.txt, item.active ? { color:'#FFC82F' } : {color:'#DBDBDB'}]}>{item.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    button: {margin: 5, borderWidth: 2, borderRadius: 50, paddingHorizontal: 15, justifyContent:'center', alignItems:'center'},
    txt: { fontFamily: 'Poppins-Regular', fontSize: 16, textAlignVertical:'center', textAlign:'center' },
})

export default Tag;
