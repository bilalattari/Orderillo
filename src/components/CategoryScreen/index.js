
import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { MenuIcon, MiddleIcon, SearchIcon, StarIcon, BackDetailImage, CrossIcon2 } from "../../assets";
import { ButtonComponent, Card, Tag, SwitchIcon, } from "..";
const CategoryScreen = ({ }) => {
    const [modal, setmodal] = useState(true)
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
    return (
        <View style={styles.main}>
            <View style={styles.iconviewtop}>
                <Text style={styles.headingtxt}>Orderillo</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.backimgview}>
                    <Image style={styles.backDImg} source={BackDetailImage} />
                    <View style={styles.overlayview}>
                        <Text style={styles.overlaytxt}>Welcome Beatrice Tasty tasy restaurant!</Text>
                        <Image style={styles.overlayimg} source={MiddleIcon} />
                    </View>
                </View>

                <View style={styles.iconview}>
                    <TouchableOpacity style={styles.touch}>
                        <Image style={styles.icon} source={SearchIcon} />
                    </TouchableOpacity>

                    <SwitchIcon backgroundColor={'#FC6366'} />
                    <TouchableOpacity style={styles.touch}>
                        <Image style={styles.icon} source={StarIcon} />
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 15, paddingHorizontal: 15, }}>
                    {
                        tags.map((item, index) => { return (<Tag key={index} item={item} />) })
                    }
                </View>
                <View style={styles.txtview}>
                    <Text style={styles.txt}>Drinks</Text>
                </View>
                <FlatList showsVerticalScrollIndicator={false} data={[1, 2, 3, 4, 5, 6, 7, 8]} keyExtractor={(item, index) => index} renderItem={({ item, index }) => {
                    return (
                        <Card onPress={()=>{setmodal(true)}} viewmorecolor={'#FC6366'} iconcolor={'#FC6366'} />
                    );
                }} />
            </ScrollView>
            {modal ?
                <View style={styles.modal}>
                    <TouchableOpacity onPress={()=>{setmodal(false)}} style={[styles.modalbtn]}>
                        <Image style={styles.icontop} source={CrossIcon2} />
                    </TouchableOpacity>
                    <Text style={styles.detailmodaltxt}>Your Details</Text>
                    <View style={{ flex: 1 }}></View>
                    <View style={styles.details}>
                        <Text style={styles.detailmodaltxt}>About Us</Text>
                        <Text style={styles.detailmodaltxt}>Terms and Conditions</Text>
                        <Text style={styles.detailmodaltxt}>Privacy Policy</Text>
                        <Text style={styles.detailmodaltxt}>Open Source Licences</Text>
                        <ButtonComponent height={40} isIcon={false} color={'#00AF90'} text={'LEAVE TABLE'} />
                    </View>
                </View>
                : null
            }

        </View>
    );
};

const styles = StyleSheet.create({
    main: { backgroundColor: '#FFF', flex: 1, },
    txtview: { alignSelf: 'flex-start', width: '100%', paddingRight: 40 },
    txt: { fontFamily: 'Poppins-SemiBold', width: '100%', alignSelf: 'flex-start', margin: 20, borderBottomColor: '#DBDBDB', borderBottomWidth: 1, color: '#3B3B3B', fontSize: 25 },
    headingtxt: { fontFamily: 'Poppins-Regular', color: '#FFC82F', fontSize: 30, marginTop: 10 },
    iconview: { paddingHorizontal: 15, alignItems: 'center', justifyContent: 'space-between', width: '100%', height: 60, flexDirection: "row", },
    iconviewtop: { paddingHorizontal: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3B3B3B', width: '100%', height: 50, flexDirection: "row", },
    icon: { resizeMode: 'contain', width: 30, height: 30 },
    icontop: { resizeMode: 'contain', width: 15, height: 15 },
    touch: { padding: 10, justifyContent: 'center', alignItems: 'center' },
    backDImg: { resizeMode: 'stretch', width: '100%', height: '100%' },
    backimgview: { height: 100 },
    overlayview: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, },
    overlaytxt: { flex: 2.5, fontFamily: 'Poppins-SemiBold', fontSize: 20, color: '#FFF' },
    overlayimg: { flex: 1, resizeMode: 'contain', width: 70, height: 70 },

    modal: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', },
    detailmodaltxt: { alignSelf: 'flex-start', paddingHorizontal: 20, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF' },
    modalbtn: { position: 'relative', top: 10, left: 10, padding: 10, marginBottom: 10, },
    details: { flex: 0.5, alignItems: 'center', }
})

export default CategoryScreen;
