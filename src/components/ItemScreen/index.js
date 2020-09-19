
import React from 'react';
import { Text, Image, View, StyleSheet, ScrollView, FlatList } from "react-native";
import { MiddleIcon } from "../../assets";
import { Header, Card } from "..";
const ItemScreen = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <Header switchcart={true} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.txtview}>
                    <Text style={styles.txt}>Drinks</Text>
                </View>
                <FlatList showsVerticalScrollIndicator={false} data={[1, 2, 3, 4, 5, 6, 7, 8]} keyExtractor={(item, index) => index} renderItem={({ item, index }) => {
                    return (
                        <Card onPress={()=>{navigation.navigate('DetailScreen')}} viewmorecolor={'#DBDBDB'} iconcolor={'#FFC82F'} />
                    );
                }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    main: { backgroundColor: '#FFF', flex: 1, },
    txtview: { alignSelf: 'flex-start', width: '100%', paddingRight: 40 },
    txt: { fontFamily: 'Poppins-SemiBold', width: '100%', alignSelf: 'flex-start', margin: 20, borderBottomColor: '#DBDBDB', borderBottomWidth: 1, color: '#3B3B3B', fontSize: 25 },


})

export default ItemScreen;
