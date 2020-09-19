
import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { MenuIcon, CartIcon, } from "../../assets";
import { SwitchIcon } from "../";
const Header = ({ switchcart }) => {
    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.touch}>
                <Image style={styles.icon} source={MenuIcon} />
            </TouchableOpacity>
            {
                switchcart ?
                    <>
                        <SwitchIcon backgroundColor={'#00AF90'} />
                        <TouchableOpacity style={styles.touch}>
                            <Image style={styles.icon} source={CartIcon} />
                        </TouchableOpacity>
                    </>
                    : null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    main: { paddingHorizontal: 15, alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#3B3B3B', width: '100%', height: 60, flexDirection: "row", },
    icon: { resizeMode: 'contain', width: 30, height: 27 },
    touch: { padding: 10, justifyContent: 'center', alignItems: 'center' },
})

export default Header;
