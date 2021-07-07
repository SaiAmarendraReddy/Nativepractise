import React, { useState } from 'react';
import {Text, View, Switch, StyleSheet} from 'react-native';

const Swtch = () => {

    const [disSwtch,setDisSwtch] = useState(false);

    const enableDisable = () => {
        setDisSwitch(!disSwtch);
    }

    return(
        <>
            {/* title */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Switch Button</Text>
            </View>
            {/* content */}
            <View style={styles.contentContainer}>
                {/* Switch component */}
                <View style={styles.switchContainer}>
                    <Switch disabled={disSwtch}/>
                </View>
                {/* props of the Switch component */}
                <View style={styles.switchProps}>
                    <View></View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    titleContainer:{
        height: 50,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        marginTop:3,
        marginBottom:3
    },
    title:{
        fontSize:29
    },
    contentContainer:{
        flex:1,
        backgroundColor:'blue'
    },
    switchContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"pink",
        height:50
    },
    switchProps:{

    }
})

export default Swtch;