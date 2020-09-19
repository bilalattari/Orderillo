
import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

const ButtonComponent = ({ isIcon, Icon, color, text, height, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { borderColor: color, }]}>
            {isIcon ?
                <Image style={styles.backImage} source={Icon} />
                : null
            }
            <Text style={[styles.txt, { fontSize: 19, color: color, }, !isIcon ? { flex: 1, height: height, textAlign: 'center', textAlignVertical:'center' } : null]}>{text}</Text>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    button: {marginVertical:5, flexDirection: 'row', width: '80%', alignItems: 'center', backgroundColor: 'transparent', borderWidth: 2, borderRadius: 50, },
    backImage: { margin: 5, resizeMode: 'contain', width: 40, height: 40 },
    txt: { fontFamily: 'Poppins-Regular' },
})

export default ButtonComponent;
