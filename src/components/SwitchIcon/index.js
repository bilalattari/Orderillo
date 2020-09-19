
import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { SwitchLeftIcon, SwitchRightIcon } from "../../assets";

const SwitchIcon = ({ backgroundColor }) => {
    const [active, setactive] = useState(true)
    return (
        <TouchableOpacity onPress={() => { setactive(!active) }} style={[styles.main, { backgroundColor: backgroundColor }]}>
            <View style={[styles.imgview, !active ? { backgroundColor: 'transparent', borderWidth: 0 } : null]}>
                <Image style={styles.image} source={SwitchLeftIcon} />
            </View>
            <View style={[styles.imgview, active ? { backgroundColor: 'transparent', borderWidth: 0 } : null]}>
                <Image style={styles.image} source={SwitchRightIcon} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    main: { width: 120, height: 37, borderRadius: 30, flexDirection: 'row' },
    image: { resizeMode: 'contain', width: 25, height: 25 },
    imgview: { borderColor: '#707070', borderWidth: 1, backgroundColor: '#FFF', flex: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
})

export default SwitchIcon;
